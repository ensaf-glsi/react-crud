import { TrashIcon } from "@heroicons/react/outline";
import { Button } from "components/Button";
import { Td, Th, Tr } from "components/table";
import { Table } from "components/table/Table";
import { Contact } from "features/types";

type Props = {
  contacts: Contact[];
  remove: (id: number) => void;
};

export default function List({ contacts, remove }: Props) {
  const header = (
    <tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Phone</Th>
      <Th action>
        <span className="sr-only">Edit</span>
      </Th>
    </tr>
  );
  return (
    <Table header={header}>
      {contacts.map((c, idx) => (
        <Tr key={c.id} index={idx}>
          <Td className="font-medium" textColor="text-gray-900">
            {c.name}
          </Td>
          <Td>{c.email}</Td>
          <Td>{c.phone}</Td>
          <Td className="text-right font-medium">
            {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a> */}
            <Button
              confirm="Etes vous sur de vouloir supprimer ce contact"
              onClick={() => remove(c.id)}
              icon={<TrashIcon className="h-5 w-5" aria-hidden="true" />}
            />
          </Td>
        </Tr>
      ))}
    </Table>
  );
}
