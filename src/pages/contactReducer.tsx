import Edit from "features/contact/Edit";
import List from "features/contact/List";
import { Contact } from "features/types";
import { useCrud } from "hooks/crud";

const _contacts: Contact[] = [
  {
    id: "1",
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    phone: "0663-910292",
  },
  {
    id: "2",
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    phone: "0666-810292",
  },
];
const initialState = {
  list: _contacts,
  current: undefined,
};

export default function ContactPage() {
  const { state, edit, save, remove } = useCrud<Contact>(initialState);
  const { current: current, list: contacts } = state;
  //FIXME : chercher une solution pour le typage generique de current et list
  return (
    <div>
      <Edit save={save} contact={current as Contact} />
      <List contacts={contacts as Contact[]} remove={remove} edit={edit} />
    </div>
  );
}
