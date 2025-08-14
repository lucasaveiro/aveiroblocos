// src/app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export const dynamic = "force-dynamic"; // evita cache; garante checagem de sessão a cada requisição

// Server Action: Sign out
export async function signOutAction() {
  "use server";
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/"); // volta para a home após sair
}

export default async function Dashboard() {
  const supabase = createClient();

  // Garante sessão: se não tiver usuário -> /login
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // (Opcional) Carregue dados do usuário/empresa aqui via Supabase se quiser

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-primary-700">
            Painel da Fábrica
          </h1>
          <p className="text-sm text-graybrand-600 mt-1">
            Bem-vindo, <span className="font-medium">{user.email}</span>
          </p>
        </div>

        <form action={signOutAction}>
          <button
            className="rounded-xl border border-graybrand-300 px-4 py-2 text-sm hover:bg-graybrand-50"
            type="submit"
          >
            Sair
          </button>
        </form>
      </div>

      {/* Cards principais */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Produtos */}
        <div className="bg-white border border-graybrand-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary-700">Produtos</h2>
          <p className="text-sm text-graybrand-600 mt-2">
            Gerencie catálogo, preços e disponibilidade.
          </p>
          {/* Enquanto não existir CRUD dedicado, link para a listagem pública */}
          <a
            href="/produtos"
            className="inline-block mt-4 rounded-xl border border-primary-500 text-primary-600 px-4 py-2 hover:bg-primary-500 hover:text-white transition"
          >
            Ver catálogo
          </a>
          <div className="mt-3 text-xs text-graybrand-500">
            * Área de gestão (CRUD) em breve
          </div>
        </div>

        {/* Pedidos */}
        <div className="bg-white border border-graybrand-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary-700">Pedidos</h2>
          <p className="text-sm text-graybrand-600 mt-2">
            Acompanhe status e histórico de vendas.
          </p>
          <button
            disabled
            className="inline-block mt-4 rounded-xl border border-graybrand-300 text-graybrand-500 px-4 py-2 cursor-not-allowed"
            title="Em breve"
          >
            Em breve
          </button>
        </div>

        {/* Cursos */}
        <div className="bg-white border border-graybrand-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary-700">Cursos</h2>
          <p className="text-sm text-graybrand-600 mt-2">
            Divulgue e gerencie capacitações da fábrica.
          </p>
          <a
            href="/#cursos"
            className="inline-block mt-4 rounded-xl border border-primary-500 text-primary-600 px-4 py-2 hover:bg-primary-500 hover:text-white transition"
          >
            Ver seção de cursos
          </a>
        </div>
      </div>

      {/* KPIs simples (mock) */}
      <div className="grid md:grid-cols-4 gap-4 mt-10">
        {[
          { label: "Pedidos (30d)", value: "—" },
          { label: "Ticket médio", value: "—" },
          { label: "Produtos ativos", value: "—" },
          { label: "Clientes", value: "—" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="bg-graybrand-50 border border-graybrand-200 rounded-2xl p-5 text-center"
          >
            <div className="text-2xl font-bold text-primary-600">{kpi.value}</div>
            <div className="text-xs text-graybrand-600 mt-1">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Ajuda / próximos passos */}
      <div className="mt-10 bg-primary-900 text-white rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Próximos passos</h3>
        <ul className="list-disc list-inside text-white/90 text-sm mt-2 space-y-1">
          <li>Adicionar CRUD de produtos nesta área.</li>
          <li>Conectar pagamentos (Stripe/Mercado Pago) e carrinho.</li>
          <li>Relatórios de pedidos e exportação.</li>
        </ul>
      </div>
    </section>
  );
}
