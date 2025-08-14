
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-graybrand-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-primary-500 font-semibold text-lg">
          Aveiro Blocos
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#produtos" className="hover:text-primary-500">Produtos</Link>
          <Link href="/#numeros" className="hover:text-primary-500">Números</Link>
          <Link href="/#cursos" className="hover:text-primary-500">Cursos</Link>
          <Link href="/#contato" className="hover:text-primary-500">Contato</Link>
          <Link href="/produtos" className="ml-2 inline-block rounded-xl px-3 py-1 border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white transition">
            Loja
          </Link>
        </nav>
      </div>
    </header>
  );
}
