import Modal from '../../ui/Modal';

export default function CategoryDeleteModal({
  open,
  category,
  loading,
  onClose,
  onConfirm,
}) {
  return (
    <Modal
      open={open}
      title="Eliminar categoría"
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText={loading ? 'Eliminando...' : 'Sí, eliminar'}
      cancelText="Cancelar"
      danger
      loading={loading}
    >
      <div className="text-center space-y-3">
        <div className="text-4xl mb-1">🗑️</div>
        <p className="text-sm text-gray-600">
          ¿Seguro que deseas eliminar <span className="font-semibold text-gray-800">"{category?.nombre}"</span>?
        </p>
        <p className="text-xs text-gray-400">
          Esta acción no se puede deshacer.
        </p>
      </div>
    </Modal>
  );
}