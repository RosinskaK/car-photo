import React from "react";

import { cars } from "@/lib/data";
import CarProduct from "@/components/car-product";
import Footer from "@/components/footer";
import ProductHeader from "@/components/product-header";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = cars.find((p) => p.id === Number(params.id));

  if (!product) {
    return <h2 className="text-red-500">Produkt nie istnieje!</h2>;
  }

  return (
    <section className="w-full h-screen min-h-screen flex flex-col items-center justify-items-start">
      <ProductHeader />
      <article className="flex flex-grow">
        <CarProduct product={product} />
      </article>
      <Footer />
    </section>
  );
}
