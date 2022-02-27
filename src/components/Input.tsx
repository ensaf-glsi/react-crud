import type { FC } from "react";
import {
    FieldValues, UseControllerProps
} from "react-hook-form";
import { Field } from "./Field";

type InputProps<IFormValues extends FieldValues> = {
  className?: string;
  label?: string;
  type?: string;
} & UseControllerProps<IFormValues>;

export const Input = <IFormValues extends FieldValues = FieldValues>(props: InputProps<IFormValues>) => {
  const { type = "text", ...rest } = props;
  return (
    <Field
      {...rest}
      render={(field) => (
        <input
          type={type}
          {...field}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      )}
    />
  );
};
