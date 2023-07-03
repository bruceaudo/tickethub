"use client";
import Hero from "@/app/components/Hero";
import Loading from "./components/loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SideTrayContextProvider } from "@/contexts/SideTray";
const Feed = dynamic(() => import("./components/Feed"), {
  ssr: false,
  loading: () => <Loading />
});

export default function Home() {
  
  return <SideTrayContextProvider>
      <main className="lg:mb-[200px] md:mb-[50px] mb-[70px] w-full">
        <Hero />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
      </main>
    </SideTrayContextProvider>;
}
