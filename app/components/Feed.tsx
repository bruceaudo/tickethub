"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type FeedProps = {
    
};

async function Feed() {
    const response = await fetch(`/api/all_products`);
    const products = await response.json();

    //await new Promise(resolve=>setTimeout(resolve, 3000))
    
  //const [products, setProducts] = useState([]);

  //useEffect(() => {
    //const getData = async () => {
      
     // const response = await fetch(`/api/all_products`);
     // const data = await response.json();
      //setProducts(data);
    //};

   // getData();
  //}, []);
    
    return <>{products?.length === 0 && <div className="mt-[110px] md:mt-[120px] lg:mt-[130px] text-base flex items-center w-full">
            <p className='min-w-[50%] mx-auto text-center'>No products have been added yet.</p>
          </div>}
        <section className="flex flex-col min-h-screen justify-center items-center mt-[110px] md:mt-[120px] lg:mt-[130px]">
          <div className="sm:my-6 my-10 grid lg:grid-cols-3 lg:gap-[60px] md:grid-cols-2 md:gap-10 grid-cols-1 sm:gap-y-0 gap-y-[62px]">
            {products?.length > 0 && products.map((product: object) =>
                <div
                  key={product._id}
                  className="rounded-lg shadow-md p-2 hover:scale-[1.05] transition-all cursor-pointer"
                >
                  <Image
                    width={300}
                    height={500}
                    src={product.imageURL}
                    alt="Product_image"
                    className="w-full sm:h-[400px] h-[500px] rounded-lg"
                  />
                  <p className="mt-4 font-semibold text-[18px] truncate">
                    {product.name}
                  </p>
                  <span className="mt-4 block font-semibold">
                    Ksh.{product.price}
                  </span>
                  <Link
                    href={`/product?id=${product._id}`}
                    className="w-full py-2 px-3 bg-[#0077be] text-white rounded-lg mt-4 block text-center shadow-lg"
                  >
                    See more
                  </Link>
                </div>
              )}
          </div>
        </section></>
}
export default Feed;