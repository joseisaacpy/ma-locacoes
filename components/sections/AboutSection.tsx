"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/fade-in";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="min-h-screen w-full p-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 bg-linear-to-b from-blue-default to-black"
    >
      {/* image */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        whileTap={{ scale: 1.03 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/sobre.webp"
          alt="Sobre a M.A Locações"
          width={600}
          height={600}
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
          A M.A Locações e Serviços, fundada em Teresina, Piauí, por Marcos
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
        {/* nav de rede sociais */}
        <nav aria-label="Redes Sociais" className="flex gap-2">
          <motion.button
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="mt-6"
          >
            <Button asChild>
              <a
                href=""
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src="/assets/images/whatsapp-color.svg"
                  alt="Ícone do Whatsapp"
                  width={20}
                  height={20}
                />
              </a>
            </Button>
          </motion.button>
          <motion.button
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="mt-6"
          >
            <Button asChild>
              <a
                href=""
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src="/assets/images/instagram-color.svg"
                  alt="Ícone do Instagram"
                  width={20}
                  height={20}
                />
              </a>
            </Button>
          </motion.button>
        </nav>
      </div>
    </section>
  );
}
