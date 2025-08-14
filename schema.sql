
-- Produtos e e-commerce básico
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  price numeric(10,2) not null,
  image_url text,
  description text,
  active boolean default true
);

create table if not exists customers (
  id uuid primary key default auth.uid(),
  email text unique,
  name text
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id),
  status text default 'created',
  total numeric(10,2) default 0,
  created_at timestamp with time zone default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  qty int not null default 1,
  unit_price numeric(10,2) not null
);

-- View pública de produtos ativos
create or replace view public_products as
  select id, title, slug, price, image_url from products where active = true;

-- Políticas RLS (exemplos)
alter table products enable row level security;
create policy "Produtos visíveis" on products
  for select using (active = true);

alter table customers enable row level security;
create policy "Cliente vê seu registro" on customers
  for select using (auth.uid() = id);

alter table orders enable row level security;
create policy "Cliente vê seus pedidos" on orders
  for select using (
    exists (select 1 from customers c where c.id = orders.customer_id and c.id = auth.uid())
  );

alter table order_items enable row level security;
create policy "Itens por pedido visíveis" on order_items
  for select using (
    exists (
      select 1 from orders o
      join customers c on c.id = o.customer_id
      where o.id = order_items.order_id and c.id = auth.uid()
    )
  );
