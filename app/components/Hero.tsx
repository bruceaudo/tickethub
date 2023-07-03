"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

type HeroProps = {
    
};

const Hero: React.FC<HeroProps> = () => {
    
    return <section className="flex flex-col max-h-screen justify-center items-center mt-[80px] sm:mt-[100px]">
        <h1 className="hero--title">
          Buy.<span className="">Sell.</span>Discover
        </h1>
        <p className="hero--description text-center sm:max-w-[60%] mt-[10px]">
          Tickethub is your ultimate destination for all things events.
          Discover a world of exciting concerts, festivals, sports games,
          and more.
        </p>
        <form className="sm:w-[60%] w-full gap-y-5 mt-[40px] h-[40px] border border-gray-200 rounded-lg shadow-lg">
          <input className="h-full indent-4 w-full rounded-lg focus:outline-none focus:border-none shadow-lg" placeholder="Search events" type="text" />
          <div className="flex justify-center">
            <button className="rounded-lg px-3 py-2 h-[40px] bg-[#0077be] text-white text-sm mt-5 w-[130px] shadow-lg">
              Search
            </button>
          </div>
        </form>
      </section>;
}
export default Hero;