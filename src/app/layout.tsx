import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "Naptastic",
  description: "Feel like home!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="container py-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
