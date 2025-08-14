import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

type NoopResult<T=any> = Promise<{ data: T | null; error: Error | null }>;
const noop = <T=any>(): NoopResult<T> => Promise.resolve({ data: null, error: new Error("Supabase env missing") });

export const createClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // client “fake” que não quebra build (métodos básicos usados no projeto)
    return {
      from: () => ({ select: () => noop(), eq: () => ({ select: () => noop() }), order: () => ({ select: () => noop() }) }),
      auth: { getUser: () => Promise.resolve({ data: { user: null }, error: null }) }
    } as any;
  }

  const cookieStore = cookies();
  return createServerClient(url, key, {
    cookies: {
      get: (name: string) => cookieStore.get(name)?.value,
      set: (name: string, value: string, options: any) => {
        try { cookieStore.set(name, value, options); } catch {}
      },
      remove: (name: string, options: any) => {
        try { cookieStore.set(name, "", { ...options, maxAge: 0 }); } catch {}
      },
    },
  });
};
