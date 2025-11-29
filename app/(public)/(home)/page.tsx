import Header from "@/components/header/Header";
import Hero from "@/components/sections/HeroSection";
import Sobre from "@/components/sections/AboutSection";
import Produtos from "@/components/sections/ProductsSection";
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
