import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import store from "@/store/store";

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
