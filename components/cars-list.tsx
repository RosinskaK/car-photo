import React from "react";

import { cars } from "@/lib/data";
import Link from "next/link";
//import Image from "next/image";


function CarsList() {
  return (
    <div className="flex flex-col p-5 mb-12 h-full w-full">
      <h1 className="text-2xl font-bold pb-4">Ogłoszeń()</h1>
      <ul className="gap-5 font-roboto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {cars.map((p) => (
          <li
            key={p.id}
            className=" border rounded-md shadow-md bg-[#FFFFFF] h-auto min-w-[260px] "
          >
            <Link
              href={`/products/${p.id}`}
              className="text-gray-700 hover:text-black"
            >
              <div className="h-[200px] bg-black rounded-t-md w-auto">
                zdjęcie
              </div>
              <article className="p-2">
                <div className="flex flex-col">
                  {/* <div className="flex justify-between"> */}
                  <h1 className=" font-bold text-left text-xl leading-none">
                    {p.name}
                  </h1>
                  <h2 className=" font-semibold text-right text-lg leading-tight">
                    {p.price} zł
                  </h2>
                  {/* </div> */}
                  <p>{p.shortDescription}</p>
                  <div className="text-base flex gap-2 font-light flex-wrap">
                    <p>{p.silnik}</p>
                    <p>{p.paliwo}</p>
                    <p>{p.rocznik}</p>
                    <p>{p.konieMechaniczne}</p>
                    <p>{p.przebieg}</p>
                  </div>
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
