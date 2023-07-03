"use client";
import SellDashboardBottomSection from "@/app/components/SellDashboardBottomSection";
import SellDashboardTopSection from "@/app/components/SellDashboardTopSection";


type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {

  return (
    <div className="flex -mx-[16px] md:-mx-[64px] lg:-mx-[96px]">
      
      <SellDashboardTopSection />
      <section className="flex flex-col w-full lg:ml-[300px]">
        <SellDashboardBottomSection />
        <div className="px-[16px] md:px-[64px] lg:px-[96px]">
          {children}
        </div>
      </section>
    </div>
  );
};
export default layout;
