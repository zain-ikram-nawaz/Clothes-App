import Header from "@/component/header";
import Footer from "@/component/footer/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
