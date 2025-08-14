
# Site da Fábrica de Blocos — Starter (Next.js + Tailwind + Supabase + Netlify)

Projeto inicial profissional com design simples e moderno em **branco, azul escuro e cinza**, pensado para rodar no **Netlify** e usar **Supabase** (Auth + Postgres + Storage).

## Seções da Home
1. **Cabeçalho** com poucos links de menu e botão "Loja".
2. **Hero** com imagem de fundo e texto forte.
3. **Galeria de produtos** em cards (título, preço unitário e botão "Saiba mais").
4. **Números** (blocos vendidos, 28 anos, obras atendidas, etc.).
5. **Cursos** (divulgação + CTA).
6. **Mapa + Contato** no rodapé, com **link de login discreto** no rodapé ("Área restrita").

## Rodando localmente
```bash
npm i
cp .env.example .env.local
npm run dev
```

Preencha as variáveis de ambiente `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
COMPANY_NAME=Fábrica de Blocos Aveiro
COMPANY_ADDRESS=Rua Exemplo, 123 - Centro, Sua Cidade - SP
COMPANY_EMAIL=contato@fabricadeblocos.com.br
COMPANY_PHONE=+55 (11) 99999-9999
COMPANY_MAPS_EMBED=(colar o iframe embed do Google Maps)
```

## Deploy no Netlify
1. Conecte o repositório no Netlify.
2. Configure as **Environment Variables** (mesmas do `.env.local`).
3. Build command: `npm run build` e o plugin `@netlify/plugin-nextjs` cuida do resto.
4. Cada push fará o deploy automático.

## Banco (Supabase)
Use o arquivo [`schema.sql`](./schema.sql) como base. Exemplo de tabelas: `products`, `customers`, `orders`, `order_items`. Crie também uma view pública `public_products` para listar apenas produtos ativos.

## Pagamentos
Sugestão: **Stripe** com **PIX** habilitado ou **Mercado Pago**. Implemente um endpoint de checkout (Netlify Functions) e redirecione o usuário.

## Personalização de design
- Cores definidas no `tailwind.config.ts` (`primary` em tons de azul escuro e `graybrand`).
- Substitua `/public/hero.jpg` por uma foto real da fábrica/obra.

## Próximos passos
- Página de produto ([slug]) com cálculo de frete e simulação de carga.
- Carrinho + resumo de pedido.
- Painel protegido (dashboard) para CRUD de produtos e pedidos.
- SEO técnico (sitemap, OG tags) e Schema.org de produtos.
