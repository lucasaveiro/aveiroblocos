import { createClient } from "./supabase-server";

export type Product = {
  id: string;
  title: string;
  price: number;
  image_url: string | null;
  slug: string | null;
};

export async function fetchProducts() {
  const supabase = createClient();
  const { data } = await supabase
    .from('products')
    .select('id,title,price,image_url,slug')
    .order('title');
  return data as Product[] | null;
}

