'use client';

import type { Produto } from "@/types/produto";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardProduto({
  id,
  nome,
  descricao,
  imagemPath,
}: Produto) {
  return (
    <Card key={id}>
      <CardHeader>
        <Image
          src={imagemPath}
          width={400}
          height={400}
          alt={nome}
          className="rounded-md"
        />
        <CardTitle>{nome}</CardTitle>
        <CardDescription>{descricao}</CardDescription>
      </CardHeader>
    </Card>
  );
}
