
import Link from "next/link";

export default function CoursesPromo() {
  return (
    <section id="cursos" className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Cursos online para capacitação</h2>
          <p className="mt-4 text-white/80">
            Aprenda melhores práticas de produção, controle de qualidade e gestão para fábricas de blocos de concreto.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/cursos" className="rounded-xl bg-white text-primary-800 px-4 py-2 hover:opacity-90">Ver cursos</Link>
            <Link href="/contato" className="rounded-xl border border-white px-4 py-2 hover:bg-white hover:text-primary-800">Fale conosco</Link>
          </div>
        </div>
        <div className="bg-primary-800/60 border border-primary-700 rounded-2xl p-6">
          <ul className="space-y-3 text-white/90 list-disc list-inside">
            <li>Gestão industrial aplicada</li>
            <li>Qualidade segundo NBR 6136</li>
            <li>Manutenção e segurança operacional</li>
            <li>Logística e custos de produção</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
