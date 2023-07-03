"use client";
import Hero from "@/app/components/Hero";
import Loading from "./components/loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const Feed = dynamic(() => import("./components/Feed"), {
  ssr: false,
  loading: () => <Loading />
});

export default function Home() {
  
  return <main className="lg:mb-[200px] md:mb-[50px] mb-[70px] w-full">
      <Hero />
    <Suspense fallback={<Loading />}>
        <Feed />
      </Suspense>
    </main>;
}
