import type { NextPage } from "next";
import type { SyntheticEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "components/Input";
import { Select } from "components/Select";
import React from "react";

// const add = (a: number, b: number): number => a + b;

// type AddFunction = (a: number, b: number) => number;
// const add2: AddFunction = (x, y) => x + y;

interface User {
  raisonSociale?: string;
  fullName?: string;
  email: string;
  country: string;
  type?: 'societe' | 'pp';
};

const Home: NextPage = () => {
  const {
    handleSubmit,
    watch,
    control,
  } = useForm<User>({
    defaultValues: {
      fullName: '',
      raisonSociale: '',
      email: '',
      country: '',
      type: 'pp'
    }
  });
  const type = watch('type');
  const save: SubmitHandler<User> = (user, event) => {
    console.log(event);
    console.log(user);
  };

  return (
    <form
      onSubmit={handleSubmit(save)}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <Select label="Type" name="type" control={control} className="sm:col-span-2">
              <>
                <option value="societe">Société</option>
                <option value="pp">Personne physique</option>
              </>
            </Select>
            {type === "pp" ? ( <Input
              label="Full Name"
              className="sm:col-span-3"
              name="fullName"
              control={control}
              rules={{
                required: true,
                minLength: { value: 3, message: "taille min 3" },
              }}
            />) : (<Input
              label="Raison sociale"
              className="sm:col-span-3"
              name="raisonSociale"
              control={control}
              rules={{
                required: true,
                minLength: { value: 3, message: "taille min 3" },
              }}
            />)}
           
            
            <Input
              label="Email"
              className="sm:col-span-4"
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[a-z]+@[a-z]+(.[a-z]{2,5})?$/i,
                  message: "Email invalid",
                },
              }}
            />
            <Select label="Country" name="country" control={control} className="sm:col-span-2">
              <>
                <option>Maroc</option>
                <option>United States</option>
                <option>Mexico</option>
              </>
            </Select>
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

export default Home;
