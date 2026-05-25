export default function FiltrosBar({
  estados, planes,
  estado, setEstado,
  plan, setPlan,
  onExport, onImprimir,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs px-4 py-3 flex items-center gap-3 flex-wrap">

      {/* Icono filtros */}
      <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/>
        </svg>
        <span className="text-[12px] font-medium text-slate-500">Filtrar por:</span>
      </div>

      {/* Select Estado */}
      <select
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        className="text-[12px] font-medium text-slate-600 border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white outline-none cursor-pointer hover:border-slate-300 transition-colors"
      >
        {estados.map((e) => <option key={e}>{e === "Todos" ? `Estado: ${e}` : e}</option>)}
      </select>

      {/* Select Plan */}
      <select
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        className="text-[12px] font-medium text-slate-600 border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white outline-none cursor-pointer hover:border-slate-300 transition-colors"
      >
        {planes.map((p) => <option key={p}>{p === "Todos" ? `Plan: ${p}` : p}</option>)}
      </select>

      {/* Acciones derecha */}
      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={onExport}
          className="text-[12px] font-medium text-slate-600 border border-slate-200 rounded-xl px-3.5 py-1.5 hover:bg-slate-50 transition-colors"
        >
          Exportar CSV
        </button>
        <button
          onClick={onImprimir}
          className="text-[12px] font-medium text-slate-600 border border-slate-200 rounded-xl px-3.5 py-1.5 hover:bg-slate-50 transition-colors"
        >
          Imprimir Listado
        </button>
      </div>
    </div>
  );
}