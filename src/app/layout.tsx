import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyle } from "@/components/GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codie - Centro Pokémon",
  description: "Teste Técnico para a empresa Codie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
