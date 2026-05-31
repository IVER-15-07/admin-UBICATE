import axiosInstance from "../axios";

export const categoryService = {
    async crearCategoria(categoriaData) {
        try {
            const response = await axiosInstance.post("super-admin/categories", categoriaData); 
            return response.data.data 
        }
        catch (error) {
            console.error("Error al crear categoría:", error);
            throw error;
        }   
    },


    async obtenerCategorias() {
        try {
            const response = await axiosInstance.get("super-admin/categories");
            return response.data.data;
        }   
        catch (error) {
            console.error("Error al obtener categorías:", error);
            throw error;
        }
    },

    async actualizarCategoria(categoryId, categoriaData) {
        try {
            const response = await axiosInstance.put(`super-admin/categories/${categoryId}`, categoriaData);
            return response.data.data;
        }   
        catch (error) {
            console.error("Error al actualizar categoría:", error);
            throw error;
        }       
    },

    async eliminarCategoria(categoryId) {   
        try {
            const response = await axiosInstance.delete(`super-admin/categories/${categoryId}`);
            return response.data.data;
        }
        catch (error) {
            console.error("Error al eliminar categoría:", error);
            throw error;
        }
    }
};