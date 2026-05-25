import Pagination from "./Pagination";

const TIPO_COLORS = {
  "Evento Comunitario": "bg-teal-50 text-teal-600 border border-teal-200",
  "Anuncio Clasificado": "bg-blue-50 text-blue-600 border border-blue-200",
  "Alerta de Seguridad": "bg-violet-50 text-violet-600 border border-violet-200",
};

export default function SolicitudesTable({
  solicitudes, total, perPage,
  page, totalPages, onPageChange,
  onAprobar, onRechazar,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <p className="text-sm font-semibold text-slate-700">Solicitudes Pendientes</p>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full tracking-wider">
          {total} TOTAL
        </span>
      </div>

      {/* Tabla */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100">
            {["Nombre del Solicitante", "Tipo de Publicación", "Fecha", "Acciones"].map((h) => (
              <th key={h} className="text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-5 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {solicitudes.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50/60 transition-colors">

              {/* Solicitante */}
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}>
                    {s.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-700 leading-tight">{s.nombre}</p>
                    <p className="text-[11px] text-slate-400">{s.email}</p>
                  </div>
                </div>
              </td>

              {/* Tipo */}
              <td className="px-5 py-3.5">
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${TIPO_COLORS[s.tipo] ?? "bg-slate-100 text-slate-500"}`}>
                  {s.tipo}
                </span>
              </td>

              {/* Fecha */}
              <td className="px-5 py-3.5 text-[12.5px] text-slate-400">{s.fecha}</td>

              {/* Acciones */}
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onAprobar(s.id)}
                    title="Aprobar"
                    className="text-slate-300 hover:text-emerald-500 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => onRechazar(s.id)}
                    title="Rechazar"
                    className="text-slate-300 hover:text-rose-500 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer paginación */}
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
        <p className="text-[12px] text-slate-400">
          Mostrando {solicitudes.length} de {total} resultados
        </p>
        <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
}