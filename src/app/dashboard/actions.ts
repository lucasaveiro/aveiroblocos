// src/app/dashboard/actions.ts
"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export async function signOutAction() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/"); // volta para a home após sair
}
