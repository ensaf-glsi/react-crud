/*
<button
    type="button"
    className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
    Button text
    <MailIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
</button>

<button
    type="button"
    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
</button>

<button
    type="button"
    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
    Button text
</button>

*/

import { FC, ReactElement } from "react";

type ButtonProps = {
  icon?: ReactElement;
  onClick: () => void;
  confirm?: string;
};

export const Button: FC<ButtonProps> = ({
  icon,
  confirm,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (confirm) {
      if (window.confirm(confirm)) {
        onClick();
      }
    } else {
      onClick();
    }
  };
  return (
    <button
      type="button"
      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={handleClick}
      {...props}
    >
      {icon}
    </button>
  );
};
