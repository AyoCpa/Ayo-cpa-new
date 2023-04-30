import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd";
import store from "@/redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="ASSETS/LOGOS/logo-full.svg" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
