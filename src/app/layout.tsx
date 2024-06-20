import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type_second } from "@/functions/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>{children}</body>
    </html>
  );
}
