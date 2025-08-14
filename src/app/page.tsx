import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Stats from "@/components/Stats";
import CoursesPromo from "@/components/CoursesPromo";

const mockProducts = [
  { id: "1", title: "Bloco Estrutural 14x19x39", price: 3.49, image: null, slug: "bloco-estrutural-14" },
  { id: "2", title: "Bloco Vedação 9x19x39", price: 2.29, image: null, slug: "bloco-vedacao-9" },
  { id: "3", title: "Canaleta 14x19x39", price: 4.19, image: null, slug: "canaleta-14" },
  { id: "4", title: "Meio Bloco 14x19x19", price: 2.10, image: null, slug: "meio-bloco-14" }
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[72vh] grid place-items-center bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Blocos de concreto com padrão industrial</h1>
          <p className="mt-4 text-white/90">28 anos de experiência, tecnologia e compromisso com a qualidade para sua obra.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/#produtos" className="rounded-xl bg-white text-primary-800 px-5 py-3 font-medium hover:opacity-90">Ver produtos</Link>
            <Link href="/produtos" className="rounded-xl border border-white px-5 py-3 font-medium hover:bg-white hover:text-primary-800">Loja</Link>
          </div>
        </div>
      </section>

      {/* Produtos (grid resumida) */}
      <section id="produtos" className="bg-graybrand-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-700">Produtos</h2>
            <Link href="/produtos" className="text-sm underline">Ver todos</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {mockProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <Stats stats={[
        { label: "Blocos vendidos", value: "12.450.000+" },
        { label: "Anos de mercado", value: "28" },
        { label: "Obras atendidas", value: "3.200+" },
        { label: "Satisfação", value: "98%" }
      ]} />

      {/* Cursos */}
      <CoursesPromo />
    </>
  );
}
