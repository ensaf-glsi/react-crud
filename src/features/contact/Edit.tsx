import { Input } from "components/Input";
import type { Contact } from "features/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type EditProps = {
  save: (contact: Contact) => void;
  contact?: Contact;
};

const defaultContact = {
  name: "",
  email: "",
  phone: "",
};

const Edit = ({ save, contact }: EditProps) => {
  console.log("form edit ? ", contact);
  const { handleSubmit, control, reset } = useForm<Contact>({
    defaultValues: contact || defaultContact,
  });

  const onSubmit = (contact: Contact) => {
    save(contact);
    reset(defaultContact);
  }
//   useEffect(() => {
//     console.log("comp did mount");
//   }, []);
  useEffect(() => {
    console.log("comp did update", contact);
    reset(contact);
  }, [contact, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <Input label="Nom" name="name" control={control} rules={{required: true}} />
            <Input label="Email" name="email" control={control} rules={{required: true}} />
            <Input label="Tél." name="phone" control={control} />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Edit;
