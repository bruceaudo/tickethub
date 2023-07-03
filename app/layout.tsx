"use client";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { NextAuthProvider } from "./providers";
import { useRouter } from "next/router";
import { SideTrayContextProvider } from "@/contexts/SideTray";
import { useSideTray } from "@/hooks/useSideTray";

export const metadata = {
  title: "Ticketbay: Buy & Sell Tickets",
  description: "Created with love by Bruce Audo"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>
          <SideTrayContextProvider>
            <Navbar />
            {children}
          </SideTrayContextProvider>
        </body>
      </NextAuthProvider>
    </html>
  );
}
