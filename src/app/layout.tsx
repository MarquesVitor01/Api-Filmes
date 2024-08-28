import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./Globals.scss";
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Api Filmes",
  description: "Aplicação desenvolvida com ReactJs e TypeScript, para api de filmes com TMDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
