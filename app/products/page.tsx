import React from "react";

import { cars } from "@/lib/data";
import Link from "next/link";
//import Image from "next/image";

function CarsList() {
  return (
    <div className="flex flex-col w-screen px-10 mb-10 h-full">
      <h1 className="text-2xl font-bold pb-4">Ogłoszeń()</h1>
      <ul className="gap-5 flex flex-wrap">
        {cars.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow">
            <Link
              href={`/products/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              <div className="w-[300px] h-[200px] bg-red-500">zdjęcie</div>
              <article>
                <div className="flex  flex-col">
                  <div className="flex justify-between">
                    <h1>{product.name}</h1>
                    <div>{product.price} zł</div>
                  </div>
                  <h2>shortDescription</h2>
                  <p>specification</p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarsList;
