import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd";
import store from "@/redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import Script from "next/script";
import { Toaster, toast } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Provider store={store}>
        <Head>
          <meta name="yandex-verification" content="9e298de898fce288" />

          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        </Head>
        <Component {...pageProps} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3XXWXW846N" />
        <Script src="/script.js" />
      </Provider>
    </>
  );
}
