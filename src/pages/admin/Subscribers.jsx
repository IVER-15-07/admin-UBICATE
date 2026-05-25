import { useSuscriptores } from "../../hooks/admin/useSuscriptores";
import SuscriptoresStats from "../../components/admin/subscribers/SuscriptoresStats";
import FiltrosBar from "../../components/admin/subscribers/FiltrosBar";
import SuscriptoresTable from "../../components/admin/subscribers/SuscriptoresTable";

const Subscribers = () => {

  const {
    stats,
    suscriptores, estados, planes,
    estado, setEstado, plan, setPlan,
    page, setPage, totalPages, total, perPage,
    handleEditar, handleEliminar,
    handleExportCSV, handleImprimir,
  } = useSuscriptores();

  return (
    <div className="flex flex-col gap-5">

      {/* Encabezado */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Gestión de Suscriptores</h1>
          <p className="text-[13px] text-slate-400 mt-0.5">
            Administra el listado de usuarios inscritos, estados de suscripción y pagos.
          </p>
        </div>
        <button className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl px-4 py-2 text-[12.5px] font-medium transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Nuevo Suscriptor
        </button>
      </div>

      {/* Stats */}
      <SuscriptoresStats stats={stats} />

      {/* Filtros */}
      <FiltrosBar
        estados={estados} planes={planes}
        estado={estado} setEstado={setEstado}
        plan={plan} setPlan={setPlan}
        onExport={handleExportCSV}
        onImprimir={handleImprimir}
      />

      {/* Tabla */}
      <SuscriptoresTable
        suscriptores={suscriptores}
        total={total}
        perPage={perPage}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />

    </div>
  )
}

export default Subscribers
