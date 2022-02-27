import { Navbar } from "components/layout/Navbar";
import { Footer } from "components/layout/Footer";
import { FC } from "react";
import { LayoutName } from "components/types";
import { Header } from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  name?: LayoutName;
};

export const Layout: FC<LayoutProps> = ({ name, children }) => {
  if (name === "empty") return <>{children}</>;
  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
};
