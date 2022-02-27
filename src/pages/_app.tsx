import { Layout } from "components/layout/Layout";
import { LayoutName } from "components/types";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: LayoutName;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const getDefaultLayout = (name?: LayoutName) => {
  return function layout(page: ReactElement): ReactNode {
    return <Layout name={name}>{page}</Layout>;
  };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? getDefaultLayout(Component.layout);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
