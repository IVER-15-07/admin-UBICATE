const ESTADO_STYLES = {
  Aprobado:  "bg-emerald-50 text-emerald-600 border border-emerald-200",
  Pendiente: "bg-amber-50  text-amber-600  border border-amber-200",
  Rechazado: "bg-rose-50   text-rose-500   border border-rose-200",
  Activo: "bg-emerald-50 text-emerald-600 border border-emerald-200",
};

export default function AdministradoresTable({ admins, loading, onEditar, onEliminar }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <p className="text-sm font-semibold text-slate-700">Administradores Activos</p>
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full tracking-wider">
          {admins.length} USUARIOS
        </span>
      </div>

      {/* Tabla */}
      {loading ? (
        <div className="px-5 py-10 text-center text-sm text-slate-400">Cargando administradores...</div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60">
              {["Nombre", "Rol", "Fecha Creación", "Estado", "Acciones"].map((h) => (
                <th key={h} className="text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-5 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {admins.map((a) => (
              <tr key={a.id} className="hover:bg-slate-50/60 transition-colors">

                <td className="px-5 py-3.5 text-[13px] font-semibold text-slate-700">
                  <div className="flex flex-col">
                    <span>{a.nombre}</span>
                    <span className="text-[11px] font-normal text-slate-400">{a.email}</span>
                  </div>
                </td>

                <td className="px-5 py-3.5 text-[12.5px] italic text-slate-500">{a.rol}</td>

                <td className="px-5 py-3.5 text-[12.5px] text-slate-400">{a.fecha}</td>

                <td className="px-5 py-3.5">
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${ESTADO_STYLES[a.estado] ?? "bg-slate-100 text-slate-500"}`}>
                    {a.estado}
                  </span>
                </td>

                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEditar(a.id)}
                      title="Editar"
                      className="text-slate-300 hover:text-blue-500 transition-colors"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => onEliminar(a.id)}
                      title="Eliminar"
                      className="text-slate-300 hover:text-rose-500 transition-colors"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                        <path d="M10 11v6"/><path d="M14 11v6"/>
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                      </svg>
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}   