
import ProductCard from "@/components/ProductCard";
import { createClient } from "@/lib/supabase-server";

export const revalidate = 60;

export default async function Produtos() {
  let products: any[] = [];
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("products")
      .select("id,title,price,image_url,slug")
      .eq("active", true)
      .order("title");
    if (error) throw error;
    products = (data || []).map((p: any) => ({
      id: p.id, title: p.title, price: Number(p.price), image: p.image_url, slug: p.slug
    }));
  } catch {
    products = [
      { id: "1", title: "Bloco Estrutural 14x19x39", price: 3.49, image: null, slug: "bloco-estrutural-14" },
      { id: "2", title: "Bloco Vedação 9x19x39", price: 2.29, image: null, slug: "bloco-vedacao-9" },
      { id: "3", title: "Canaleta 14x19x39", price: 4.19, image: null, slug: "canaleta-14" },
      { id: "4", title: "Meio Bloco 14x19x19", price: 2.10, image: null, slug: "meio-bloco-14" }
    ];
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary-700">Todos os produtos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((p) => <ProductCard key={p.id} {...p} />)}
      </div>
    </section>
  );
}
