import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import store from "@/store/store";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico?v=1" />
        <title>Patients</title>
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  );
}
