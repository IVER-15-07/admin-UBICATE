const ESTADO_STYLES = {
  Aprobado:  "bg-emerald-50 text-emerald-600 border border-emerald-200",
  Pendiente: "bg-amber-50 text-amber-600 border border-amber-200",
  Rechazado: "bg-rose-50 text-rose-600 border border-rose-200",
};

export default function SolicitudesTable({ solicitudes, onExport }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <p className="text-sm font-semibold text-slate-700">Solicitudes Recientes</p>
        <button
          onClick={onExport}
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-[12px] font-medium px-3 py-1.5 rounded-lg transition-colors"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Exportar CSV
        </button>
      </div>

      {/* Tabla */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100">
            {["Usuario", "Tipo", "Fecha", "Estado", "Acciones"].map((h) => (
              <th key={h} className="text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-5 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {solicitudes.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50/60 transition-colors">
              <td className="px-5 py-3.5 text-[13px] font-medium text-slate-700">{s.usuario}</td>
              <td className="px-5 py-3.5 text-[13px] text-slate-500">{s.tipo}</td>
              <td className="px-5 py-3.5 text-[13px] text-slate-400">{s.fecha}</td>
              <td className="px-5 py-3.5">
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${ESTADO_STYLES[s.estado] ?? ""}`}>
                  {s.estado}
                </span>
              </td>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <button className="text-slate-400 hover:text-blue-500 transition-colors" title="Ver">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-amber-500 transition-colors" title="Editar">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-100 text-center">
        <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium transition-colors">
          Ver todas las solicitudes
        </button>
      </div>
    </div>
  );
}