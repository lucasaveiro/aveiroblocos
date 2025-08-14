
import "./../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fábrica de Blocos - Qualidade e resistência para sua obra",
  description: "Fábrica de blocos de concreto com 28 anos de experiência. Produtos certificados, entrega ágil e atendimento especializado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-graybrand-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
