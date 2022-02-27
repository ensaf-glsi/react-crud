import { FC, ReactNode } from "react";

type TableProps = {
  header: ReactNode;
  children: ReactNode;
};

export const Table: FC<TableProps> = ({ header, children }) => (
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">{header}</thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
