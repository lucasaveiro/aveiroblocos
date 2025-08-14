// src/app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { signOutAction } from "./actions"; // ✅ importa a server action

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

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

      {/* ... resto do conteúdo do dashboard ... */}
    </section>
  );
}
