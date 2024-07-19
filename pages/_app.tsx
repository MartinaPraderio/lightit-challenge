import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import store from "@/store/store";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpg" />
        <title>Patients</title>
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
