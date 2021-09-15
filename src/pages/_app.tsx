import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta
          name="description"
          content="A web application that collates the latest articles from Dev.to & daily trending repositories from Github filtered in Javascript programming language."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/250x120.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CLIPNOTES</title>
      </Head>
      <div className="scrollbar scrollbar-thin scrollbar-thumb-gray-400 bg-gray-50 min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
};
export default App;
