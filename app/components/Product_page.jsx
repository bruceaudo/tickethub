"use client"
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductLoading from "../[pid]/loading";


const Product_page = () => {
  const params = useSearchParams();
  const product_id = params.get("id");
  const[product, setProduct]=useState([])
  const[loading, setLoading]=useState(false)

  

  useEffect(() =>
  {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(`/api/specific_product/${product_id}`);
      const data = await response.json();

      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
    
  },[product_id]);

  return (
    <>
      {loading && <ProductLoading />}
      {product && !loading && product.map((p) => (
        <section
          className="grid lg:grid-cols-[_2fr_3fr] sm:grid-cols-[_2fr_2fr] lg:gap-20 sm:gap-10 grid-cols-1 sm:gap-y-0 gap-y-12"
          key={p._id}
        >
          <Image
            className="rounded-sm h-[480px] lg:h-[480px] sm:h-[450px] w-full object-cover"
            width={450}
            height={480}
            src={p.imageURL}
            alt="Product_image"
          />
          <div className="flex flex-col items-start">
            <p className="mt-4 font-semibold text-4xl">{p.name}</p>
            <p className="mt-4 font-semibold text-xl">Ksh.{p.price}</p>
            <p className="mt-4 text-base">{p.description}</p>
            <button className="px-3 py-2 h-[40px] rounded-lg bg-[#0077be] text-white w-[150px] mt-8">
              Buy Ticket
            </button>
          </div>
        </section>
      ))}
    </>
  );
};

export default Product_page;
