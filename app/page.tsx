"use client";
import Hero from "@/app/components/Hero";
import Feed from "./components/Feed";
export default function Home() {
  
  return <main className="lg:mb-[200px] md:mb-[50px] mb-[70px] w-full">
        <Hero />
          <Feed />
      </main>;
}
