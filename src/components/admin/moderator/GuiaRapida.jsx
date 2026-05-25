export default function GuiaRapida({ items }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 shrink-0">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p className="text-[13px] font-semibold text-slate-600">Guía de Moderación Rápida</p>
      </div>
      <p className="text-[12px] text-slate-400">Antes de aprobar o rechazar, verifique los siguientes criterios:</p>
      <div className="flex flex-wrap gap-3 mt-1">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 text-[12px] text-slate-600">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}