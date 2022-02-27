import { Navbar } from "components/layout/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
    </>
  );
};