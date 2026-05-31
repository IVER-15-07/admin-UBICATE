import { useState, useEffect, useCallback } from 'react';
import { categoryService } from '../../services/superAdmin/categoryService';

export const useCategoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await categoryService.obtenerCategorias();
      setCategories(data);
    } catch {
      setError('Error al cargar las categorías');
    } finally {
      setLoading(false);
    }
  }, []);

  const createCategory = async (categoriaData) => {
    setLoading(true);
    setError(null);
    try {
      const nueva = await categoryService.crearCategoria(categoriaData);
      setCategories((prev) => [...prev, nueva]);
      return nueva;
    } catch (err) {
      setError('Error al crear la categoría');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateCategory = async (categoryId, categoriaData) => {
    setLoading(true);
    setError(null);
    try {
      const actualizada = await categoryService.actualizarCategoria(categoryId, categoriaData);
      setCategories((prev) =>
        prev.map((cat) => (cat.id === categoryId ? actualizada : cat))
      );
      return actualizada;
    } catch (err) {
      setError('Error al actualizar la categoría');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (categoryId) => {
    setLoading(true);
    setError(null);
    try {
      await categoryService.eliminarCategoria(categoryId);
      setCategories((prev) => prev.filter((cat) => cat.id !== categoryId));
    } catch (err) {
      setError('Error al eliminar la categoría');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await categoryService.obtenerCategorias();
        if (isMounted) {
          setCategories(data);
        }
      } catch {
        if (isMounted) {
          setError('Error al cargar las categorías');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    categories,
    loading,
    error,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};