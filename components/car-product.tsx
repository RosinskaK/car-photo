import React from 'react';

import { cars } from '@/lib/data';
import Link from "next/link";


type ProductProps = {
  product: (typeof cars)[number];
};

function CarProduct({ product }: ProductProps) {
//   const product = cars.find((p) => p.id === Number(params.id));

//   if (!product) {
//     return <h2 className="text-red-500">Produkt nie istnieje!</h2>;
//   }

  return (
    <main className="p-3">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.shortDescription}</p>
      <p className="text-xl font-semibold mt-2">{product.price} zł</p>
      <Link
        href="/"
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        ← Powrót do listy
      </Link>
    </main>
  );
}

export default CarProduct;