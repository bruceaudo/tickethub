"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';


const SellDashboard = () => {
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
    },[session?.user?.id])
    
    return <section className='h-screen flex flex-col items-center justify-center -mt-[50px]'>
        
    
            <div className='rounded-lg border border-gray-200 w-[300px] h-[300px] flex items-center justify-center'>
                {products && !loading && products.length !== 1 &&
                    <p className='font-bold text-3xl'>{products.length} products</p>}
                {products && !loading && products.length === 1 &&
                <p className='font-bold text-3xl'>{products.length} product</p>}
            {loading &&
                    <p className='skeleton bg-gray-200 w-[300px] h-[300px] rounded-lg'></p>}
            </div>
        
    </section>
}
export default SellDashboard;