"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Bars3Icon, ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

import { useSession, signIn, signOut, getProviders } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation';
import { useSideTray } from '@/hooks/useSideTray';
import LoginModal from './LoginModal';
import MobileNav from './MobileNav'



const Navbar = () => {
  const { data: session } = useSession()
  const { isOpen: isSideOpen, setIsOpen: setIsSideOpen } = useSideTray()
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const router = useRouter()
  
  const checkIfLoggedIn = () => {
    if (!session?.user) {
      setIsLoggedIn(false)
      return
    }
    setIsLoggedIn(true)
    router.push('/sell/dashboard')
  }
  

  const [providers, setProviders] = useState(null)
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  },[])
  
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isSellPage = pathname === '/sell/dashboard'
  const isAllProductsPage = pathname === '/sell/dashboard/allproducts'
  const isAddProductPage = pathname === '/sell/dashboard/addproduct'
  
    //Sign in with google tray will slide in from the bottom after user visits site
    //In desktop and tab, sign in with google dialog box will appear at the top right corner after user visits site
  return <><nav className="flex justify-between items-center h-[60px] border-b border-b-gray-200 text-sm text-gray-500 sticky top-0 bg-white z-10">
    <div className='flex items-center gap-2 sm:gap-5'>
      {isSellPage &&
        <Bars3Icon onClick={()=>setIsSideOpen((prevState) => ({
      ...prevState,
      isOpen: true
    }))} className='icon lg:hidden' />
      }
      {isAllProductsPage &&
        <Bars3Icon onClick={()=>setIsSideOpen((prevState) => ({
      ...prevState,
      isOpen: true
    }))} className='icon lg:hidden' />
      }
      {isAddProductPage &&
        <Bars3Icon onClick={()=>setIsSideOpen((prevState) => ({
      ...prevState,
      isOpen: true
    }))} className='icon lg:hidden' />
      }
        <Link className="font-bold text-2xl z-50 text-black" href={"/"}>
          Ticket<span className="text-[#0077be]">hub</span>
      </Link>
      </div>
        {/**Desktop */}
        <div className="hidden lg:flex space-x-5 items-center">
          <button onClick={checkIfLoggedIn} className='shadow-none bg-transparent'>Sell</button>
        {!session?.user && <div>{providers && Object.values(providers).map(provider=> <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className="rounded-lg px-3 w-[80px] py-2 bg-[#0077be] text-white text-sm">
              Sign up
            </button>)}</div>}
        {!session?.user && <div>{providers && Object.values(providers).map((provider)=> <button className='shadow-none' type='button' key={provider.name} onClick={()=>signIn(provider.id)}>Sign in</button>)}</div>}
          {!session?.user ? <span onClick={() => setIsOpen(prev => !prev)} className="flex gap-[2px] relative items-center cursor-pointer">
                <UserCircleIcon className="w-8 h-8" />
                <ChevronDownIcon className="w-3 h-3" />
                {isOpen && <div className="absolute shadow-lg bg-white border border-[#f4f4f4] w-[230px] top-[38px] rounded-lg px-5 py-5 right-[8px]">
                    <h3 className="text-center text-base font-semibold text-black">
                      Get started on Tickethub
            </h3>
            {providers && Object.values(providers).map(provider=> 
                    <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className="rounded-lg px-3 py-2 w-full bg-[#0077be] text-white text-sm mt-5">
                      Sign up
            </button>)}
            {providers && Object.values(providers).map(provider=> 
                    <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className="px-3 py-2 w-full mt-4 rounded-lg border border-black text-black">
                      Sign in
                    </button>)}
                  </div>}
              </span> : <span onClick={() => setIsOpen(prev => !prev)} className="flex gap-[2px] relative items-center cursor-pointer">
                <Image className="h-8 w-8 rounded-full" width={32} height={32} src={session?.user.image} alt="Profile" />
                <ChevronDownIcon className="w3 h-3" />
                {isOpen && <div className="absolute shadow-lg bg-white border border-[#f4f4f4] w-[240px] top-[38px] rounded-lg px-5 py-5 right-[8px] z-50">
                    <h3 className="text-center text-base font-semibold text-black">
                      What are you looking for?
                    </h3>

                    <p onClick={()=>signOut()} className="px-3 py-2 w-full mt-4 rounded-lg bg-[#0077be] text-white">
                      Log out
                    </p>
                    <Link href={'/sell/dashboard'} className="px-3 inline-block py-2 w-full text-sm mt-5 border-t">
                      Sell on Tickethub
                    </Link>
                  </div>}
              </span>}
        </div>
        {/**Mobile and tab */}
           <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />   
    
  </nav>{ !isLoggedIn && <LoginModal setIsLoggedIn={setIsLoggedIn} /> }
      </>
}
export default Navbar;