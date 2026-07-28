import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kerala Houseboats | Brahmari Holidays and Backwater Cruises",
  description: "Book premium and luxury houseboats in Kerala with Brahmari Holidays and Backwater Cruises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebas.variable} font-sans bg-background text-foreground antialiased selection:bg-primary-green selection:text-white`}
      >
        <Navbar />
        <MobileBottomNav />
        <main className="min-h-screen pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
