import List from "features/contact/List";
import { useState } from "react";

const _contacts = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    phone: "0663-910292",
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    phone: "0666-810292",
  },
];

export default function Contact() {
  const [contacts, setContacts] = useState(_contacts);
  const remove = (id: number) => {
    const newContacts = contacts.filter((c) => c.id !== id);
    setContacts(newContacts);
  }
  return <List contacts={contacts} remove={remove} />;
}
