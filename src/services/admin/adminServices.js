import axiosInstance from "../axios";

export const adminService = {
    async crearAdmin(adminData) {
        try {
            const response = await axiosInstance.post("/admin/create", adminData);
            return response.data;
        } catch (error) {
            console.error("Error al crear admin:", error);
            throw error;
        }
    },

};
