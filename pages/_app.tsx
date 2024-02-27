import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd";
import store from "@/redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        </Head>
        <Component {...pageProps} />

        <GoogleAnalytics gaId="=G-3XXWXW846N" />
      </Provider>
    </>
  );
}
