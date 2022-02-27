import type { FC } from "react";
import {
  FieldValues, UseControllerProps
} from "react-hook-form";
import { Field } from "./Field";

type SelectProps<IFormValues extends FieldValues> = {
  className?: string;
  label?: string;
  children?: React.ReactElement;
} & UseControllerProps<IFormValues>;

export const Select = <IFormValues extends FieldValues = FieldValues>(props: SelectProps<IFormValues>) => {
  const { children, ...rest } = props;
  return (
    <Field
      {...rest}
      render={(field) => (
        <select
          {...field}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          {children}
        </select>
      )}
    />
  );
};
