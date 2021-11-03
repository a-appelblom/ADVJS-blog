import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export const getStaticProps = () => {
  return {
    props: { test: "test" },
  };
};

export default MyApp;
