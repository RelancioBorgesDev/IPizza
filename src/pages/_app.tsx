import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/global/themes/default";
import { GlobalStyles } from "../styles/global/globals";
import "react-toastify/dist/ReactToastify.css";
import { ContainerToast } from "../styles/pages/app/app";
import Head from "next/head";
import logo from "../assets/logo.svg";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>IPizza</title>
        <link rel="icon" href={"../assets/logo.svg"} sizes="any" />
      </Head>
      <GlobalStyles />
      <ContainerToast
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
