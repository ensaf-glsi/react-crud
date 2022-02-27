import type { FC } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type FieldProps<IFormValues extends FieldValues> = {
  className?: string;
  label?: string;
  render: (field: any) => React.ReactElement;
} & UseControllerProps<IFormValues>;

export const Field = <IFormValues extends FieldValues = FieldValues>(props: FieldProps<IFormValues>) => {
  const { className, name, label, render } = props;
  const { field, fieldState } = useController(props);
  const { error, isTouched } = fieldState;
  let errorMessage = undefined;
  if (error && isTouched) {
    if (error.message) {
      errorMessage = error.message;
    } else if (error.type === "required") {
      errorMessage = "Ce champ est obligatoire";
    } else {
      errorMessage = "Ce champ est invalid";
    }
  }
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1">
        {render(field)}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
};
