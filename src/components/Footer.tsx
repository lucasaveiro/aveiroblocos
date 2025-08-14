
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-graybrand-200 mt-16" id="contato">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold">Fábrica de Blocos</h3>
          <p className="text-sm mt-2 opacity-90">
            Qualidade e resistência para sua obra, há 28 anos no mercado.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium">Contato</h4>
          <ul className="text-sm mt-2 space-y-2 opacity-90">
            <li><span>Endereço:</span> <span>{process.env.COMPANY_ADDRESS || "Endereço da empresa"}</span></li>
            <li><span>E-mail:</span> <a href={`mailto:${process.env.COMPANY_EMAIL || ""}`} className="underline">{process.env.COMPANY_EMAIL || "email@empresa.com"}</a></li>
            <li><span>Telefone:</span> <a href={`tel:${process.env.COMPANY_PHONE || ""}`} className="underline">{process.env.COMPANY_PHONE || "(00) 00000-0000"}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Localização</h4>
          <div className="mt-2 rounded-lg overflow-hidden aspect-video border border-graybrand-700">
            <iframe
              src={process.env.COMPANY_MAPS_EMBED || "https://maps.google.com"}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-graybrand-700 py-4 text-xs text-center text-graybrand-400">
        © {new Date().getFullYear()} Fábrica de Blocos. Todos os direitos reservados.
        <span className="mx-2">•</span>
        <Link href="/login" className="opacity-60 hover:opacity-100">Área restrita</Link>
      </div>
    </footer>
  );
}
