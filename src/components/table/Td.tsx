import cn from "classnames";
import { FC, ReactNode } from "react";

type TdProps = {
  textColor?: string;
  className?: string;
  children: ReactNode;
};

export const Td: FC<TdProps> = ({
  children,
  className,
  textColor = "text-gray-500",
}) => (
  <td
    className={cn("px-6 py-4 whitespace-nowrap text-sm", className, textColor)}
  >
    {children}
  </td>
);
