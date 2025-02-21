import React from "react";

import { cars } from "@/lib/data";
import CarProduct from "@/components/car-product";


export default function ProductPage({ params }: { params: { id: string } }) {
  const product = cars.find((p) => p.id === Number(params.id));

  if (!product) {
    return <h2 className="text-red-500">Produkt nie istnieje!</h2>;
  }

  return (
    <>
      <CarProduct product={product} />
    </>
  );
}
