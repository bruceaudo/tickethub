
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { NextAuthProvider } from "./providers";

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
          
            <Navbar />
            {children}
          
        </body>
      </NextAuthProvider>
    </html>
  );
}
