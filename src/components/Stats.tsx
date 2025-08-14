
type Stat = { label: string; value: string };
export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section id="numeros" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-700">Nossos números</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-graybrand-50 border border-graybrand-200 rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">{s.value}</div>
              <div className="text-sm mt-2 text-graybrand-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
