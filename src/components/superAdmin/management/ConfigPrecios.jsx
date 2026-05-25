export default function ConfigPrecios({
  precios, recaudacion,
  onPrecioChange, onGuardar,
  guardando, guardado,
}) {
  return (
    <div className="flex flex-col gap-4">

      {/* Card precios */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-5 flex flex-col gap-4">

        {/* Header */}
        <div className="flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
          <p className="text-sm font-semibold text-slate-700">Configuración de Precios</p>
        </div>

        {/* Creación inicial */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-medium text-slate-500">Creación Inicial</label>
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-slate-400 transition-colors">
            <span className="px-3 py-2.5 text-[13px] text-slate-400 bg-slate-50 border-r border-slate-200">$</span>
            <input
              type="number"
              value={precios.creacion}
              onChange={(e) => onPrecioChange("creacion", e.target.value)}
              className="flex-1 px-3 py-2.5 text-[13px] text-slate-700 font-medium outline-none bg-white"
            />
          </div>
          <p className="text-[11px] text-slate-400">Costo por registro de nueva entidad en mapa.</p>
        </div>

        {/* Renovación mensual */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-medium text-slate-500">Renovación Mensual</label>
          <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-slate-400 transition-colors">
            <span className="px-3 py-2.5 text-[13px] text-slate-400 bg-slate-50 border-r border-slate-200">$</span>
            <input
              type="number"
              value={precios.renovacion}
              onChange={(e) => onPrecioChange("renovacion", e.target.value)}
              className="flex-1 px-3 py-2.5 text-[13px] text-slate-700 font-medium outline-none bg-white"
            />
          </div>
          <p className="text-[11px] text-slate-400">Costo de mantenimiento recurrente mensual.</p>
        </div>

        {/* Botón guardar */}
        <button
          onClick={onGuardar}
          disabled={guardando}
          className={`w-full py-2.5 rounded-xl text-[13px] font-semibold transition-colors flex items-center justify-center gap-2
            ${guardado
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : "bg-slate-800 hover:bg-slate-700 text-white"
            }
            disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {guardando ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Guardando…
            </>
          ) : guardado ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Guardado
            </>
          ) : (
            "Guardar Tarifas"
          )}
        </button>
      </div>

      {/* Card recaudación */}
      <div className="rounded-2xl bg-slate-900 p-5 text-white flex flex-col gap-2 relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -right-1 -bottom-8 w-16 h-16 rounded-full bg-white/5" />

        <p className="text-[9px] font-bold uppercase tracking-widest text-white/50">Recaudación Mensual</p>
        <p className="text-4xl font-bold tracking-tight">{recaudacion.valor}</p>
        <p className={`text-[12px] font-medium flex items-center gap-1 ${recaudacion.trend.dir === "up" ? "text-emerald-400" : "text-rose-400"}`}>
          <span>{recaudacion.trend.dir === "up" ? "↑" : "↓"} {recaudacion.trend.pct}</span>
          <span className="text-white/40 font-normal">{recaudacion.trend.label}</span>
        </p>
      </div>

    </div>
  );
}