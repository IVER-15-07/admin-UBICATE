
import Modal from '../../ui/Modal';
    

export default function CategoryFormModal({
  open,
  editing,
  form,
  saving,
  onClose,
  onSubmit,
  onChange,
}) {
  return (
    <Modal
      open={open}
      title={editing ? 'Editar categoría' : 'Nueva categoría'}
      onClose={onClose}
      onConfirm={onSubmit}
      confirmText={saving ? 'Guardando...' : editing ? 'Actualizar' : 'Crear'}
      cancelText="Cancelar"
      loading={saving}
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1.5">Nombre</label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => onChange('nombre', e.target.value)}
            placeholder="Ej: Restaurantes"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 mb-1.5">
            Ícono <span className="text-gray-400 font-normal">(emoji)</span>
          </label>
          <input
            type="text"
            value={form.icono}
            onChange={(e) => onChange('icono', e.target.value)}
            placeholder="Ej: 🍕"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          {form.icono && <p className="mt-1.5 text-3xl">{form.icono}</p>}
        </div>

        <div className="text-xs text-gray-400">
          {editing ? 'Se actualizarán los datos de la categoría.' : 'La categoría nueva quedará disponible de inmediato.'}
        </div>

        <button type="submit" className="hidden" aria-hidden="true" />
      </form>
    </Modal>
  );
}