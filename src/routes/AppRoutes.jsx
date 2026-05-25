import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

import AdminLayout from "../layouts/AdminLayout";

/* Public */
import LoginPage from "../pages/public/LoginPage";

import DashboardPage from "../pages/admin/DashboardPage";

/* Pages 

import CategoriasPage from "../pages/admin/CategoriasPage";
import GestionAdminPage from "../pages/admin/GestionAdminPage";
import AjustesPage from "../pages/admin/AjustesPage";
import SuperAdminPage from "../pages/superAdmin/SuperAdminPage";*/

import NotFoundPage from "../pages/error/NotFoundPage";
import UnauthorizedPage from "../pages/error/UnauthorizedPage";

export default function AppRoutes() {

  return (
    <Routes>

      {/* Públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Root */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Protegidas */}
      <Route element={<ProtectedRoute />}>

        {/* MISMO layout para TODOS */}
        <Route element={<AdminLayout />}>

          {/* Admin + SuperAdmin */}
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route element={<RoleRoute roles={["admin", "superAdmin"]}/>}>

          {/* Admin + SuperAdmin 
            <Route path="/categorias" element={<CategoriasPage />} />
            <Route path="/gestion" element={<GestionAdminPage />} />
            <Route path="/ajustes" element={<AjustesPage />} />*/}

          </Route>

          {/* SOLO superAdmin */}
          <Route element={<RoleRoute roles={["superAdmin"]}/>}>
            {/*
            <Route path="/super-admin" element={<SuperAdminPage />}/>
            */}

          </Route>

        </Route>
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}