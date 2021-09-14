import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>CLIPNOTES</title>
      </Head>
      <div className="scrollbar scrollbar-thin scrollbar-thumb-gray-400 bg-gray-50 min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </>
  );
};
export default App;
