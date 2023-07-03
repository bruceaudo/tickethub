import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";

type SellDashboardBottomSectionProps = {
    
};

const SellDashboardBottomSection:React.FC<SellDashboardBottomSectionProps> = () => {
    const pathname = usePathname();
    return <div className="border-b border-b-gray-200 h-[60px] px-[16px] md:px-[64px] lg:px-[96px] flex items-center justify-end sticky top-[60px] bg-white">
        <Link href={"/sell/dashboard/addproduct"} className={`${pathname === "/sell/dashboard/addproduct" ? "hidden" : ""} rounded-lg px-3 py-2 w-[140px] bg-[#0077be] text-white text-sm flex gap-1 items-center `}>
          <PlusIcon className="icon" />
          Add Product
        </Link>
      </div>;
}
export default SellDashboardBottomSection;