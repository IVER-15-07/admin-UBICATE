const ICON_BG = {
  blue:   "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green:  "bg-emerald-50 text-emerald-500",
};

const ICONS = {
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  clipboard: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    </svg>
  ),
  wallet: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
};

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.key} className="bg-white rounded-2xl border border-slate-100 shadow-xs p-5 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{s.label}</p>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${ICON_BG[s.color]}`}>
              {ICONS[s.icon]}
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-800 tracking-tight">{s.value}</p>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-semibold ${s.trend.dir === "up" ? "text-emerald-500" : "text-rose-400"}`}>
              {s.trend.dir === "up" ? "↑" : "↓"} {s.trend.pct}
            </span>
            <span className="text-xs text-slate-400">{s.trend.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}