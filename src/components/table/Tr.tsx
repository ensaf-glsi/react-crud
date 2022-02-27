import cn from "classnames";
import { FC, ReactNode } from "react";

type TrProps = {
  index?: number;
  className?: string;
  children: ReactNode;
};

export const Tr: FC<TrProps> = ({ children, className, index = 0 }) => (
  <tr
    className={cn(
      index % 2 === 0 ? "bg-white" : "bg-gray-50",
      className
    )}
  >
    {children}
  </tr>
);
