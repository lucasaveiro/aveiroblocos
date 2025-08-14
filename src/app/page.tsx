import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Stats from "@/components/Stats";
import CoursesPromo from "@/components/CoursesPromo";
import { fetchProducts } from "@/lib/products";

export default async function Home() {
  const products = await fetchProducts();
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[72vh] grid place-items-center bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center"
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Conteúdo */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Blocos de concreto com padrão industrial
          </h1>
          <p className="mt-4 text-white/90">
            28 anos de experiência, tecnologia e compromisso com a qualidade para sua obra.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/#produtos"
              className="rounded-xl bg-white text-primary-800 px-5 py-3 font-medium hover:opacity-90"
            >
              Ver produtos
            </Link>
            <Link
              href="/produtos"
              className="rounded-xl border border-white px-5 py-3 font-medium hover:bg-white hover:text-primary-800"
            >
              Loja
            </Link>
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
              {products?.map(p => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  image={p.image_url}
                  slug={p.slug}
                />
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
