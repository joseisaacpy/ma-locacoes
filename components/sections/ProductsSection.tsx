"use client";
import CardProduto from "@/components/CardProduto";
import { motion } from "framer-motion";
import { fadeSlide } from "@/animation/fade-slide";
import { produtos } from "@/data/produtos";

export default function ProductsSection() {
  return (
    <section
      id="produtos"
      className="min-h-screen w-full p-4 mx-auto bg-linear-to-b to-blue-default from-black"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Produtos para Locação
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {produtos.map((produto) => (
          <motion.div
            key={produto.id}
            variants={fadeSlide(produto.id / 5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <CardProduto {...produto} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
