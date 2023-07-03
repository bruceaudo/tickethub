"use client";
import { useSideTray } from "@/hooks/useSideTray";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type SellDashboardTopSectionProps = {
    
};

const SellDashboardTopSection:React.FC<SellDashboardTopSectionProps> = () => {
    const pathname = usePathname();
  const { isOpen, setIsOpen } = useSideTray();
    return <><aside className="fixed left-0 top-[60px] h-screen border-r border-r-gray-200 w-[300px] lg:inline-block hidden px-[16px] md:px-[64px] lg:px-8 py-8">
        <Link
          href={"/sell/dashboard"}
          className={`rounded-lg px-3 inline-block py-2 w-full h-10 mb-5 border border-[#edf3f2] ${pathname ===
          "/sell/dashboard"
            ? "bg-gray-200"
            : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/sell/dashboard/allproducts"}
          className={`rounded-lg inline-block px-3 py-2 w-full h-10 mb-5 border border-[#edf3f2] ${pathname ===
          "/sell/dashboard/allproducts"
            ? "bg-gray-200"
            : ""}`}
        >
          All Products
        </Link>
        <div />
        <div />
        <div />
      </aside>
      {/**Mobile Menu */}
      <div
        onClick={() =>
          setIsOpen(prevState => ({
            ...prevState,
            isOpen: !prevState.isOpen
          }))}
        className={`absolute ${isOpen.isOpen
          ? "translate-x-0"
          : "-translate-x-[1000px]"} menu-transition top-0 left-0 right-0 bottom-0 opacity-50 z-10 bg-black lg:hidden`}
      />
      <aside
        className={`fixed ${isOpen.isOpen
          ? "translate-x-0"
          : "-translate-x-[1000px]"} left-0 top-0 bg-white z-30 h-screen border-r border-r-gray-200 sm:w-1/2 w-2/3 inline-block lg:hidden px-[16px] md:px-[64px] lg:px-8 py-8 menu-transition`}
      >
        <div className="h-[60px] flex items-start justify-end bg-transparent">
          <XMarkIcon
            onClick={() =>
              setIsOpen(prevState => ({
                ...prevState,
                isOpen: !prevState.isOpen
              }))}
            className="icon"
          />
        </div>
        <Link
          onClick={() =>
            setIsOpen(prevState => ({
              ...prevState,
              isOpen: !prevState.isOpen
            }))}
          href={"/sell/dashboard"}
          className={`rounded-lg px-3 inline-block py-2 w-full h-10 mb-5 border border-[#edf3f2] ${pathname ===
          "/sell/dashboard"
            ? "bg-gray-200"
            : ""}`}
        >
          Home
        </Link>
        <Link
          onClick={() =>
            setIsOpen(prevState => ({
              ...prevState,
              isOpen: !prevState.isOpen
            }))}
          href={"/sell/dashboard/allproducts"}
          className={`rounded-lg inline-block px-3 py-2 w-full h-10 mb-5 border border-[#edf3f2] ${pathname ===
          "/sell/dashboard/allproducts"
            ? "bg-gray-200"
            : ""}`}
        >
          All Products
        </Link>
        <div />
        <div />
        <div />
        </aside>
        </>
}
export default SellDashboardTopSection;