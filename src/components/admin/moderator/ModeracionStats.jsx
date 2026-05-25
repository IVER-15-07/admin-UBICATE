const ICONS = {
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  thumb: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3z"/>
      <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
    </svg>
  ),
};

const ICON_COLOR = {
  green: "text-emerald-500 bg-emerald-50",
  slate: "text-slate-400 bg-slate-100",
};

export default function ModeracionStats({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.key} className="bg-white rounded-2xl border border-slate-100 shadow-xs p-5 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-3xl font-bold text-slate-800 leading-tight">{s.value}</p>
            {s.suffix && <p className="text-sm text-slate-500 -mt-1">{s.suffix}</p>}
            {s.meta   && <p className="text-xs text-slate-400">{s.meta}</p>}
            {s.trend  && (
              <p className={`text-xs font-semibold mt-0.5 ${s.trend.dir === "up" ? "text-emerald-500" : "text-rose-400"}`}>
                {s.trend.dir === "up" ? "↑" : "↓"} {s.trend.pct}
                <span className="font-normal text-slate-400 ml-1">{s.trend.label}</span>
              </p>
            )}
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${ICON_COLOR[s.color]}`}>
            {ICONS[s.icon]}
          </div>
        </div>
      ))}
    </div>
  );
}