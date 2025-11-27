import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Produtos from "@/components/sections/SectionProdutos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Footer />
    </main>
  );
}
