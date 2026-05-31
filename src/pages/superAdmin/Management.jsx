import { useSuperAdmin } from "../../hooks/superAdmin/useSuperAdmin";
import AdministradoresTable from "../../components/superAdmin/management/AdministradoresTable";
import ConfigPrecios from "../../components/superAdmin/management/ConfigPrecios";
import Modal from "../../components/ui/Modal";

const Management = () => {
  const {
    admins, loadingAdmins, precios, recaudacion,
    guardando, guardado, modal, form, submitting, error,
    handlePrecioChange, handleGuardarTarifas,
    handleNuevoAdmin, handleEditar, handleEliminar,
    handleCloseModal, handleConfirmModal, handleFormChange,
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
          loading={loadingAdmins}
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

      <Modal
        open={modal.open}
        title={modal.mode === "create" ? "Nuevo Administrador" : modal.mode === "edit" ? "Editar Administrador" : "Eliminar Administrador"}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        confirmText={modal.mode === "delete" ? "Eliminar" : "Guardar"}
        cancelText="Cancelar"
        danger={modal.mode === "delete"}
        loading={submitting}
      >
        {modal.mode === "delete" ? (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              ¿Seguro que deseas eliminar la cuenta de <strong>{modal.target?.nombre}</strong>?
            </p>
            <p className="text-xs text-slate-400">
              Esta acción quitará el acceso del administrador y no se puede deshacer.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-500">Nombre</label>
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => handleFormChange("nombre", e.target.value)}
                className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-slate-400"
                placeholder="Nombre completo"
              />
            </div>

            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-500">Correo</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
                className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-slate-400"
                placeholder="admin@correo.com"
              />
            </div>

            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-500">Contraseña {modal.mode === "edit" ? "(opcional)" : ""}</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => handleFormChange("password", e.target.value)}
                className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-slate-400"
                placeholder={modal.mode === "edit" ? "Dejar vacío para no cambiar" : "Contraseña"}
              />
            </div>

            <div className="grid gap-1.5">
              <label className="text-xs font-medium text-slate-500">Confirmar contraseña</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => handleFormChange("confirmPassword", e.target.value)}
                className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-slate-400"
                placeholder="Confirma contraseña"
              />
            </div>

            {error ? <p className="text-sm text-rose-500">{error}</p> : null}
          </div>
        )}
      </Modal>

    </div>
  )
}

export default Management
