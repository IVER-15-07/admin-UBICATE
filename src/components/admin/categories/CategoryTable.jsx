import { Pencil, Trash2 } from 'lucide-react';

export default function CategoryTable({ categories, loading, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-400 text-sm bg-white rounded-2xl shadow-sm border border-gray-100">
        Cargando categorías...
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-400 text-sm bg-white rounded-2xl shadow-sm border border-gray-100">
        No hay categorías registradas
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wide">
            <th className="text-left px-6 py-3 font-semibold">Ícono</th>
            <th className="text-left px-6 py-3 font-semibold">Nombre</th>
            <th className="text-right px-6 py-3 font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => (
            <tr
              key={cat.id}
              className={`border-b border-gray-50 hover:bg-gray-50 transition ${i % 2 === 0 ? '' : 'bg-gray-50/40'}`}
            >
              <td className="px-6 py-4 text-2xl">{cat.icono ?? '📦'}</td>
              <td className="px-6 py-4 font-medium text-gray-800">{cat.nombre}</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => onEdit(cat)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition"
                  >
                    <Pencil size={13} /> Editar
                  </button>
                  <button
                    onClick={() => onDelete(cat)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg transition"
                  >
                    <Trash2 size={13} /> Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}