
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { NextAuthProvider } from "./providers";
import { SideTrayContextProvider } from "@/contexts/SideTray";

export const metadata = {
  title: "Tickethub: Buy & Sell Tickets",
  description: "Created with love by Bruce Audo"
};

export default function RootLayout({
  children
}) {
  return <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
      <NextAuthProvider>
        <body>
          <SideTrayContextProvider>
          <Navbar />
            {children}
          </SideTrayContextProvider>
        </body>
      </NextAuthProvider>
    </html>;
}
