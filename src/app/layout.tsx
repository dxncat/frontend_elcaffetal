import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Caffetal",
  description: "Bienvenidos a El Caffetal, el mejor café seleccionado de Colombia, directo a tu puerta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
