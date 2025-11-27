import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen w-full max-w-6xl p-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-4"
    >
      {/* image */}
      <Image
        src="/assets/images/hero.jpg"
        alt="Sobre a M.A Locações"
        width={500}
        height={500}
        className="rounded-md"
      />

      {/* content */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Conheça mais sobre a M.A
        </h1>
        <p className="text-white max-w-2xl mt-2">
          A M.a Locações e Serviços, fundada em Teresina, Piauí, por Marcos
          Paulo Rodrigues da Silva em outubro de 2023, nasceu para ser sua
          parceira em construções e reformas.
        </p>
        <h2 className="text-2xl font-semibold text-white mt-4">
          Nosso Compromisso:
        </h2>
        {/* Novo H2 para destaque */}
        <ul className="text-white max-w-2xl mt-2 list-disc list-inside space-y-2">
          {/* Lista para maior clareza */}
          <li>
            Foco Principal: Fornecer máquinas e equipamentos de construção em
            excelente estado para locação (sem operador).
          </li>
          <li>
            Qualidade Garantida: Investimos em um inventário de alta qualidade e
            com manutenção rigorosa, pois sabemos que o sucesso da sua obra
            depende de ferramentas confiáveis.
          </li>
        </ul>
        <Button variant={"secondary"} className="mt-6">
          Entre em contato
        </Button>
      </div>
    </section>
  );
}
