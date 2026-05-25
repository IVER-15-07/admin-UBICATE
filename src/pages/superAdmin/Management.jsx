import { useSuperAdmin } from "../../hooks/superAdmin/useSuperAdmin";
import AdministradoresTable from "../../components/superAdmin/management/AdministradoresTable";
import ConfigPrecios from "../../components/superAdmin/management/ConfigPrecios";

const Management = () => {
  const {
    admins, precios, recaudacion,
    guardando, guardado,
    handlePrecioChange, handleGuardarTarifas,
    handleNuevoAdmin, handleEditar, handleEliminar,
  } = useSuperAdmin();
  return (
    <div className="flex flex-col gap-5">

      {/* Encabezado */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Módulo Superusuario</h1>
          <p className="text-[13px] text-slate-400 mt-0.5">
            Gestión centralizada de accesos, infraestructura del mapa y modelos comerciales.
          </p>
        </div>
        <button
          onClick={handleNuevoAdmin}
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl px-4 py-2 text-[12.5px] font-medium transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          Nuevo Administrador
        </button>
      </div>

      {/* Layout: tabla izquierda, config derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5">
        <AdministradoresTable
          admins={admins}
          onEditar={handleEditar}
          onEliminar={handleEliminar}
        />
        <ConfigPrecios
          precios={precios}
          recaudacion={recaudacion}
          guardando={guardando}
          guardado={guardado}
          onPrecioChange={handlePrecioChange}
          onGuardar={handleGuardarTarifas}
        />
      </div>

    </div>
  )
}

export default Management
