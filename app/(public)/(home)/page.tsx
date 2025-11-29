import getStatusProject from "@/lib/getStatusProject";
import Header from "@/components/header/Header";
import Hero from "@/components/sections/HeroSection";
import Sobre from "@/components/sections/AboutSection";
import Produtos from "@/components/sections/ProductsSection";
import Footer from "@/components/Footer";
import PageBlock from "@/components/PageBlock";

export default async function Home() {
  // busca o status do projeto no banco
  const { ativo, mensagemBloqueio } = await getStatusProject();
  return (
    // se o projeto estiver bloqueado, bloqueia o scroll
    <main className={!ativo ? "overflow-y-hidden h-screen" : ""}>
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Footer />
      {!ativo && <PageBlock mensagem={mensagemBloqueio} />}
    </main>
  );
}
