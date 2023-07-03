
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { NextAuthProvider } from "./providers";
import { SideTrayContextProvider } from "@/contexts/SideTray";
import MobileNav from "./components/MobileNav";

export const metadata = {
  title: "Ticketbay: Buy & Sell Tickets",
  description: "Created with love by Bruce Audo"
};

export default function RootLayout({
  children
}) {
  return <html lang="en">
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
