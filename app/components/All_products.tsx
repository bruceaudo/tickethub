"use client"
import React, { useEffect, useState } from 'react';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import CardSkeleton from './CardSkeleton';
import { useRouter } from 'next/navigation';

type All_productsProps = {
    
};

const All_products: React.FC<All_productsProps> = () => {
  const router = useRouter()
    const { data: session } = useSession();
    const[products, setProducts]=useState([])
    const[loading, setLoading]=useState(false)
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
        if (session?.user?.id) {
        const response = await fetch(`/api/users/${session.user.id}/products`);
        const data = await response.json();
          setProducts(data)
          setLoading(false)
  }
    }
    
    getProducts()
    },[])

  
  
    
  return <>{products?.length === 0 && !loading && <p className="sm:my-6 my-10 text-base">No products have been added yet. Click Add Products to add a product.</p>}
      {loading && products?.length === 0 && <CardSkeleton />}
      <section className="sm:my-6 my-10 grid lg:grid-cols-3 lg:gap-20 md:grid-cols-2 md:gap-10 grid-cols-1 sm:gap-y-0 gap-y-[62px]">
       
        
        {products?.length > 0 && !loading && products.map((product: object) => 
        <div key={product._id} className="rounded-lg">
            <Image
              width={300}
              height={450}
            src={product.imageURL}
            alt="Product_image"
            className="w-full md:h-[400px] lg:h-[300px] h-[500px] rounded-lg"
          />
          <p className="mt-4 font-semibold text-[18px] truncate">
            {product.name}
          </p>
          <div className="flex justify-center sm:gap-5 gap-7 mt-[10px] text-smtext-gray-500">
            <span onClick={()=>router.push(`/sell/dashboard/edit_product?id=${product._id}`)} className="flex gap-[2px] items-center cursor-pointer hover:text-[#0077be]">
              <PencilIcon className="w-4 h-4" /> Edit
            </span>
              <span onClick={async () => {
                
                const confirmDelete = confirm("Are you sure you want to delete this item?")
    if (confirmDelete) {
      
      try {
        const response = await fetch(`/api/delete_product/${product._id.toString()}`, {
        method: 'DELETE'
        })
        if (response.ok) {
        const filteredProducts = products.filter((p: object) => p._id !== product._id)
        setProducts(filteredProducts)
      } else {
        alert("Failed to delete product. Try again.")
      }
      } catch (error) {
        console.log("Error:",error)
      }
    }}} className="flex gap-[2px] items-center cursor-pointer hover:text-[#0077be]">
              <TrashIcon className="h-4 w-4" /> Delete
            </span>
          </div>
          </div>
          )}

        
      </section></>
}
export default All_products;