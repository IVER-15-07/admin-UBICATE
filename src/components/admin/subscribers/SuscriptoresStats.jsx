export default function SuscriptoresStats({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.key} className="bg-white rounded-2xl border border-slate-100 shadow-xs px-5 py-4 flex flex-col gap-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{s.label}</p>
          <div className="flex items-end gap-2 mt-1">
            <p className="text-2xl font-bold text-slate-800 leading-none">{s.value}</p>
            <span className={`text-xs font-semibold mb-0.5 ${s.trend.dir === "up" ? "text-emerald-500" : "text-rose-400"}`}>
              {s.trend.dir === "up" ? "↑" : "↓"} {s.trend.pct}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}