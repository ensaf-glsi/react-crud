import cn from "classnames";
import { FC, ReactNode } from "react";

type ThProps = {
  className?: string;
  children: ReactNode;
  action?: boolean;
};

export const Th: FC<ThProps> = ({ children, className, action }) => (
  <th
    scope="col"
    className={cn(
      action
        ? "relative px-6 py-3"
        : "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
      className
    )}
  >
    {children}
  </th>
);
