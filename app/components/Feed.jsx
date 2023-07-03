"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from './loading';


const Feed = ()=> {

    
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
     const response = await fetch(`/api/all_products`)
     const data = await response.json();
      setProducts(data);
      setLoading(false)
    };

    getData();
  }, []);
    
    return (
      <>
        {products?.length === 0 && !loading && (
          <div className="mt-[110px] md:mt-[120px] lg:mt-[130px] text-base flex items-center w-full">
            <p className="min-w-[50%] mx-auto text-center">
              No products have been added yet.
            </p>
          </div>
        )}
        {products && !loading && (
          <section className="flex flex-col min-h-screen justify-center items-center mt-[110px] md:mt-[120px] lg:mt-[130px] w-full">
            <div className="sm:my-6 my-10 grid lg:grid-cols-3 lg:gap-[60px] md:grid-cols-2 md:gap-10 grid-cols-1 w-full sm:gap-y-0 gap-y-[62px]">
              {products?.length > 0 &&
                products.map((product) => (
                  <Link
                    href={`/product?id=${product._id}`}
                    key={product._id}
                    className="rounded-lg cursor-pointer p-1 block"
                  >
                    <Image
                      width={300}
                      height={500}
                      src={product.imageURL}
                      alt="Product_image"
                      className="w-full sm:h-[400px] h-[500px] rounded-sm"
                    />
                    <p className="mt-4 font-semibold text-[18px] truncate">
                      {product.name}
                    </p>
                    <span className="mt-4 block font-semibold">
                      Ksh.{product.price}
                    </span>
                    <button className="w-full py-2 px-3 bg-gray-100 border-gray-200 text-black rounded-lg mt-4 mb-1.5 text-center font-semibold">
                      See more
                    </button>
                  </Link>
                ))}
            </div>
          </section>
        )}
        {loading && <Loading />}
      </>
    );
}
export default Feed;