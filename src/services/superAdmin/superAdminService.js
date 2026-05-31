import axiosInstance from "../axios";

function extractData(response) {
    return response?.data?.data ?? response?.data ?? null;
}

export const superAdminService = {
    async crearCuentaAdmin(superAdminData) {
        try {
            const response = await axiosInstance.post("super-admin/admins", superAdminData);
            return extractData(response);
        } catch (error) {
            console.error("Error al crear cuenta de admin:", error);
            throw error;
        }
    },

    async obtenerTodosLosAdmins() {
        try {
            const response = await axiosInstance.get("super-admin/admins");
            return extractData(response);
        } catch (error) {
            console.error("Error al obtener todos los admins:", error);
            throw error;
        }
    },

    async actualizarAdmin(userId, superAdminData) {
        try {
            const response = await axiosInstance.put(`super-admin/admins/${userId}`, superAdminData);
            return extractData(response);
        } catch (error) {
            console.error("Error al actualizar admin:", error);
            throw error;
        }
    },

    async eliminarAdmin(userId) {
        try {
            const response = await axiosInstance.delete(`super-admin/admins/${userId}`);
            return extractData(response);
        } catch (error) {
            console.error("Error al eliminar admin:", error);
            throw error;
        }
    }
};