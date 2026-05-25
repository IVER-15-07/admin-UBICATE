const ESTADO_STYLES = {
  ACTIVO:     "bg-emerald-50 text-emerald-600 border border-emerald-200",
  VENCIDO:    "bg-rose-50 text-rose-500 border border-rose-200",
  SUSPENDIDO: "bg-amber-50 text-amber-600 border border-amber-200",
};

// Mini barras de historial de pagos
function PagosBars({ pagos }) {
  return (
    <div className="flex items-end gap-0.5 h-5">
      {pagos.map((v, i) => (
        <div
          key={i}
          className={`w-1.5 rounded-sm ${v ? "bg-slate-700" : "bg-slate-200"}`}
          style={{ height: v ? "100%" : "45%" }}
        />
      ))}
    </div>
  );
}

// Paginación reutilizable inline
function Pagination({ page, totalPages, total, perPage, shown, onPageChange }) {
  // Genera páginas visibles: 1, 2, 3, ..., last
  const getPages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3) return [1, 2, 3, "...", totalPages];
    if (page >= totalPages - 2) return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", page, "...", totalPages];
  };

  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
      <p className="text-[12px] text-slate-400">
        Mostrando {shown} de {total.toLocaleString()} suscriptores
      </p>
      <div className="flex items-center gap-1">
        <PageBtn onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </PageBtn>
        {getPages().map((p, i) =>
          p === "..." ? (
            <span key={`ellipsis-${i}`} className="w-7 text-center text-[12px] text-slate-400">…</span>
          ) : (
            <PageBtn key={p} active={p === page} onClick={() => onPageChange(p)}>{p}</PageBtn>
          )
        )}
        <PageBtn onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </PageBtn>
      </div>
    </div>
  );
}

function PageBtn({ children, active, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-7 h-7 rounded-lg text-[12px] font-semibold flex items-center justify-center transition-colors
        ${active    ? "bg-slate-800 text-white"
        : disabled  ? "text-slate-300 cursor-not-allowed"
        :             "border border-slate-200 text-slate-500 hover:bg-slate-100"}`}
    >
      {children}
    </button>
  );
}

export default function SuscriptoresTable({
  suscriptores, total, perPage,
  page, totalPages, onPageChange,
  onEditar, onEliminar,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/60">
            {["Nombre del Usuario", "Email", "Estado", "Historial de Pagos", "Acciones"].map((h) => (
              <th key={h} className="text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 px-5 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {suscriptores.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50/60 transition-colors group">

              {/* Nombre */}
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}>
                    {s.initials}
                  </div>
                  <p className="text-[13px] font-semibold text-slate-700">{s.nombre}</p>
                </div>
              </td>

              {/* Email */}
              <td className="px-5 py-3.5 text-[12.5px] text-slate-400">{s.email}</td>

              {/* Estado */}
              <td className="px-5 py-3.5">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${ESTADO_STYLES[s.estado] ?? "bg-slate-100 text-slate-500"}`}>
                  {s.estado}
                </span>
              </td>

              {/* Historial */}
              <td className="px-5 py-3.5">
                <PagosBars pagos={s.pagos} />
              </td>

              {/* Acciones */}
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEditar(s.id)}
                    title="Editar"
                    className="text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => onEliminar(s.id)}
                    title="Eliminar"
                    className="text-slate-300 hover:text-rose-500 transition-colors"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        page={page}
        totalPages={totalPages}
        total={total}
        perPage={perPage}
        shown={suscriptores.length}
        onPageChange={onPageChange}
      />
    </div>
  );
}