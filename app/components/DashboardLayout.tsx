"use client";
import { useSideTray } from "@/hooks/useSideTray";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSideTray();

  return (
    <div className="flex -mx-[16px] md:-mx-[64px] lg:-mx-[96px]">
      <aside className="fixed left-0 top-[60px] h-screen border-r border-r-gray-200 w-[300px] lg:inline-block hidden px-[16px] md:px-[64px] lg:px-8 py-8">
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

      <section className="flex flex-col w-full lg:ml-[300px]">
        <div className="border-b border-b-gray-200 h-[60px] px-[16px] md:px-[64px] lg:px-[96px] flex items-center justify-end sticky top-[60px] bg-white">
          <Link
            href={"/sell/dashboard/addproduct"}
            className={`${pathname === "/sell/dashboard/addproduct"
              ? "hidden"
              : ""} rounded-lg px-3 py-2 w-[140px] bg-[#0077be] text-white text-sm flex gap-1 items-center `}
          >
            <PlusIcon className="icon" />
            Add Product
          </Link>
        </div>
        <div className="px-[16px] md:px-[64px] lg:px-[96px]">
          {children}
        </div>
      </section>
    </div>
  );
};
export default DashboardLayout;
