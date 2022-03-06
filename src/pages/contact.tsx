import Edit from "features/contact/Edit";
import List from "features/contact/List";
import { Contact } from "features/types";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const _contacts: Contact[] = [
  {
    id: '1',
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    phone: "0663-910292",
  },
  {
    id: '2',
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    phone: "0666-810292",
  },
];

export default function ContactPage() {
  const [contacts, setContacts] = useState(_contacts);
  setContacts((prevContacts) => {
    return [...prevContacts];
  })
  const [current, setCurrent] = useState<Contact>();
  const remove = (id: string) => {
    const newContacts = contacts.filter((c) => c.id !== id);
    setContacts(newContacts);
  };
  const save = (contact: Contact) => {
    if (contact.id) { // <=> if (current) 
      // modification
      const newContacts = contacts.map(c => c.id === contact.id ? contact : c);
      setContacts(newContacts);
      setCurrent(undefined);
    } else {
      // ajout
      const newContact = {...contact, id: uuidv4()}
      console.log("enregistrer un nouveau contact", contact);
      setContacts(contacts.concat(newContact));
    }
  };
  const edit = (contact: Contact) => {
    console.log('edit contact', contact);
    setCurrent(contact);
  };
  return (
    <div>
      <Edit save={save} contact={current} />
      <List contacts={contacts} remove={remove} edit={edit} />
    </div>
  );
}
