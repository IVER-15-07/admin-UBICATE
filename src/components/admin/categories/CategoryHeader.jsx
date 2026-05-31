import { Plus } from 'lucide-react';

export default function CategoryHeader({ onCreate }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Categorías</h1>
        <p className="text-sm text-gray-500 mt-0.5">Gestiona las categorías del mapa</p>
      </div>
      <button
        onClick={onCreate}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
      >
        <Plus size={16} />
        Nueva categoría
      </button>
    </div>
  );
}