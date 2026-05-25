import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import AdminLayout from "../layouts/AdminLayout";
import LoginPage from "../pages/public/LoginPage";

import DashboardPage from "../pages/admin/DashboardPage";
import Moderator from "../pages/admin/Moderator";
import Reports from "../pages/admin/Reports";
import Subscribers from "../pages/admin/Subscribers";

import Management from "../pages/superAdmin/Management";


import NotFoundPage from "../pages/error/NotFoundPage";
import UnauthorizedPage from "../pages/error/UnauthorizedPage";

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<ProtectedRoute />}>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route element={<RoleRoute roles={["admin", "superAdmin"]} />}>

            <Route path="/moderator" element={<Moderator />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/subscribers" element={<Subscribers />} />

          </Route>

          <Route element={<RoleRoute roles={["superAdmin"]} />}>
            <Route path="/management" element={<Management />} />
          </Route>

        </Route>
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}