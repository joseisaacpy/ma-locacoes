"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/fade-in";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen w-full max-w-6xl p-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-4"
    >
      {/* image */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/sobre.webp"
          alt="Sobre a M.A Locações"
          width={500}
          height={500}
          className="rounded-md"
        />
      </motion.div>

      {/* content */}
      <div>
        <motion.h1
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          Conheça mais sobre a M.A
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-white max-w-2xl mt-2"
        >
          A M.a Locações e Serviços, fundada em Teresina, Piauí, por Marcos
          Paulo Rodrigues da Silva em outubro de 2023, nasceu para ser sua
          parceira em construções e reformas.
        </motion.p>
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-2xl font-semibold text-white mt-4"
        >
          Nosso Compromisso:
        </motion.h2>
        {/* Novo H2 para destaque */}
        <ul className="text-white max-w-2xl mt-2 list-disc list-inside space-y-2">
          {/* Lista para maior clareza */}
          <motion.li
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Foco Principal: Fornecer máquinas e equipamentos de construção em
            excelente estado para locação (sem operador).
          </motion.li>
          <motion.li
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Qualidade Garantida: Investimos em um inventário de alta qualidade e
            com manutenção rigorosa, pois sabemos que o sucesso da sua obra
            depende de ferramentas confiáveis.
          </motion.li>
        </ul>
        <motion.button
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="mt-6"
        >
          <Button asChild variant="secondary">
            <span>Entre em contato</span>
          </Button>
        </motion.button>
      </div>
    </section>
  );
}
