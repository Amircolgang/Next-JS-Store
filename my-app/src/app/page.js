import Image from "next/image";
import Header from "@/components/header";
import Baner from "@/components/baner";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
        <Baner />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
