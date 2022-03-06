import produce from "immer";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { useImmerReducer } from "use-immer";

type StateType<T extends { id: string }> = {
  list?: T[];
  current?: T;
};
type ActionType<T extends { id: string }> = {
  type: "save" | "edit" | "remove";
  payload: string | T;
};

const oldCrud = <T extends { id: string }>(
  state: StateType<T>,
  { type, payload }: ActionType<T>
): StateType<T> => {
  switch (type) {
    case "edit":
      if (typeof payload === "string") return state;
      return {
        ...state,
        current: payload,
      };
    case "remove":
      return {
        ...state,
        list: state.list ? state.list.filter((c) => c.id !== payload) : [],
      };
    case "save":
      if (typeof payload === "string") return state;
      if (payload.id) {
        // <=> if (state.current)
        // modification
        const newList = state.list
          ? state.list.map((c) => (c.id === payload.id ? payload : c))
          : [];
        return {
          ...state,
          current: undefined,
          list: newList,
        };
      } else {
        // ajout
        const newElt = { ...payload, id: uuidv4() };
        return {
          ...state,
          list: state.list ? state.list.concat(newElt) : [newElt],
        };
      }
  }
  return state;
};

const crudWithImmer = <T extends { id: string }>(
  state: StateType<T>,
  { type, payload }: ActionType<T>
): StateType<T> => {
  return produce(state, (draft) => {
    switch (type) {
      case "edit":
        if (typeof payload === "string") return;
        //@ts-ignore //FIXME
        draft.current = payload;
        break;
      case "remove":
        draft.list = draft.list?.filter((c) => c.id !== payload);
        break;
      case "save":
        if (typeof payload === "string") return;
        if (payload.id) {
          // <=> if (state.current)
          // modification
          if (draft.list) {
            const index = draft.list?.findIndex((c) => c.id === payload.id);
            if (index !== -1) {
              //@ts-ignore
              draft.list[index] = payload;
            }
          }
          draft.current = undefined;
        } else {
          // ajout
          //@ts-ignore
          draft.list?.push({ ...payload, id: uuidv4() });
          break;
        }
    }
  });
};

export const useCrudOld = <T extends { id: string }>(
  initialState: StateType<T>
) => {
  const [state, dispatch] = useReducer(crudWithImmer, initialState);
  const remove = (id: string) => {
    dispatch({ type: "remove", payload: id });
  };
  const save = (payload: T) => {
    dispatch({ type: "save", payload });
  };
  const edit = (payload: T) => {
    dispatch({ type: "edit", payload });
  };

  return { state, edit, save, remove, dispatch };
};

const crud = <T extends { id: string }>(
  draft: StateType<T>,
  { type, payload }: ActionType<T>
) => {
  switch (type) {
    case "edit":
      if (typeof payload === "string") return;
      //@ts-ignore //FIXME
      draft.current = payload;
      break;
    case "remove":
      draft.list = draft.list?.filter((c) => c.id !== payload);
      break;
    case "save":
      if (typeof payload === "string") return;
      if (payload.id) {
        // <=> if (state.current)
        // modification
        if (draft.list) {
          const index = draft.list?.findIndex((c) => c.id === payload.id);
          if (index !== -1) {
            //@ts-ignore
            draft.list[index] = payload;
          }
        }
        draft.current = undefined;
      } else {
        // ajout
        //@ts-ignore
        draft.list?.push({ ...payload, id: uuidv4() });
        break;
      }
  }
};

export const useCrud = <T extends { id: string }>(
  initialState: StateType<T>
) => {
  const [state, dispatch] = useImmerReducer(crud, initialState);
  const remove = (id: string) => {
    dispatch({ type: "remove", payload: id });
  };
  const save = (payload: T) => {
    dispatch({ type: "save", payload });
  };
  const edit = (payload: T) => {
    dispatch({ type: "edit", payload });
  };

  return { state, edit, save, remove, dispatch };
};
