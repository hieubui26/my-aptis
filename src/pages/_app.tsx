import { useRouter } from "next/router";
import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isExamPage = router.pathname.startsWith("/exam");

  return (
    <div className="min-h-screen flex flex-col">
      {!isExamPage && <Header />}{" "}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      {!isExamPage && <Footer />}{" "}
    </div>
  );
}

export default MyApp;
