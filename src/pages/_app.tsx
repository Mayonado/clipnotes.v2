import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>CLIPNOTES</title>
      </Head>
      <div className="scrollbar scrollbar-thin scrollbar-thumb-gray-400 bg-gray-50 min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
};
export default App;
