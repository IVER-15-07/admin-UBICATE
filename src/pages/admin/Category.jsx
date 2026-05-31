import { useState } from 'react';
import { useCategoryAdmin } from '../../hooks/superAdmin/useCategoryAdmin';
import CategoryHeader from '../../components/admin/categories/CategoryHeader';
import CategoryTable from '../../components/admin/categories/CategoryTable';
import CategoryFormModal from '../../components/admin/categories/CategoryFormModal';
import CategoryDeleteModal from '../../components/admin/categories/CategoryDeleteModal';

const EMPTY_FORM = { nombre: '', icono: '' };

export default function Category() {
  const { categories, loading, error, createCategory, updateCategory, deleteCategory } = useCategoryAdmin();

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = crear, objeto = editar
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  const openEdit = (cat) => {
    setEditing(cat);
    setForm({ nombre: cat.nombre, icono: cat.icono ?? '' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
    setForm(EMPTY_FORM);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (!form.nombre.trim()) return;
    setSaving(true);
    try {
      if (editing) {
        await updateCategory(editing.id, form);
      } else {
        await createCategory(form);
      }
      closeModal();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    setConfirmDelete(null);
  };

  return (
    <div className="p-6">
      <CategoryHeader onCreate={openCreate} />

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      <CategoryTable
        categories={categories}
        loading={loading}
        onEdit={openEdit}
        onDelete={setConfirmDelete}
      />

      <CategoryFormModal
        open={modalOpen}
        editing={editing}
        form={form}
        saving={saving}
        onClose={closeModal}
        onSubmit={handleSubmit}
        onChange={(field, value) => setForm((prev) => ({ ...prev, [field]: value }))}
      />

      <CategoryDeleteModal
        open={!!confirmDelete}
        category={confirmDelete}
        loading={loading && !!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() => void handleDelete(confirmDelete.id)}
      />
    </div>
  );
}