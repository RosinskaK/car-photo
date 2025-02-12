import React from "react";

import Link from "next/link";
// import Image from "next/image";

const cars = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Telefon", price: 2000 },
  { id: 3, name: "Słuchawki", price: 500 },
];

function CarsList() {
  return (
    <div className="p-6  flex flex-col">
      <h1 className="text-2xl font-bold pb-4">Ogłoszeń()</h1>
      <ul className="space-y-3 flex">
        {cars.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow">
            <Link
              href={`/product/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              {product.name} - {product.price} zł
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarsList;
