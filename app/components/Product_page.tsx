
"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Product_pageProps = {
    
};

async function Product_page() {
    const params = useSearchParams();
    const product_id = params.get("id");
    let product

    const response = await fetch(`/api/specific_product/${product_id}`);
    const data = await response.json();

    if (Array.isArray(data)) {
        product = data; // If data is an array, set the state directly
      } else {
        product = [data]; // If data is not an array, convert it to an array and set the state
      }
    
    return <>
        {product.map(p =>
        <section
          className="grid sm:grid-cols-2 sm:gap-16 grid-cols-1 sm:gap-y-0 gap-y-12"
          key={p._id}
        >
          <Image
            className="rounded-lg h-[450px] sm:w-[350px] w-full"
            width={350}
            height={450}
            src={p.imageURL}
            alt="Product_image"
          />
          <div className="flex flex-col items-start">
            <p className="mt-4 font-semibold text-4xl">
              {p.name}
            </p>
            <p className="mt-4 font-semibold text-xl">
              Ksh.{p.price}
            </p>
            <p className="mt-4 text-base">
              {p.description}
            </p>
            <button className="px-3 py-2 rounded-lg bg-[#0077be] text-white w-[100px] mt-8">
              Buy Ticket
            </button>
          </div>
        </section>
      )}
    </>
}
export default Product_page;