"use client";

import { useState } from "react";
// Força execução apenas em runtime (evita prerender estático quebrar sem env):
export const dynamic = "force-dynamic";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Lazy import para não avaliar o cliente no build:
    const { createClient } = await import("@/lib/supabase-client");

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setError("Configuração do Supabase ausente. Defina as variáveis de ambiente no Netlify.");
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: (process.env.NEXT_PUBLIC_SITE_URL || "") + "/dashboard" }
    });
    if (error) setError(error.message);
    else setSent(true);
  };

  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold text-primary-700">Área Restrita</h1>
      {!sent ? (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm">E-mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </label>
          <button className="w-full rounded-xl bg-primary-600 text-white py-2 hover:bg-primary-500">Enviar link de acesso</button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      ) : (
        <p className="mt-4 text-sm">Se o e-mail estiver cadastrado, você receberá um link para entrar.</p>
      )}
    </section>
  );
}
