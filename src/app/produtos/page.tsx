// src/app/produtos/[slug]/page.tsx
import { createClient } from "@/lib/supabase-server";

type Props = { params: { slug: string } };

// src/app/produtos/page.tsx
export const dynamic = "force-dynamic";


export default async function ProdutoPage({ params }: Props) {
  const { slug } = params;

  // Tente por slug; se você guardar só id, adapte a query:
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("id, title, price, image_url, description, slug")
    .or(`slug.eq.${slug},id.eq.${slug}`) // aceita slug OU id simples
    .limit(1)
    .single();

  const p = data || {
    title: "Produto",
    price: 0,
    image_url: null,
    description: "Detalhes em breve.",
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary-700">
        {p.title}
      </h1>
      <p className="mt-4 text-primary-600">R$ {Number(p.price).toFixed(2)}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
          {p.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full grid place-items-center text-gray-400">Sem imagem</div>
          )}
        </div>
        <div>
          <p className="text-gray-700">{p.description || "Descrição não informada."}</p>
          {/* Botões de comprar / adicionar ao carrinho entram aqui depois */}
        </div>
      </div>
    </section>
  );
}
