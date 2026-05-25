/**
 * src/routes/RoleRoute.jsx
 * ─────────────────────────────────────────────────────────────
 * Restringe rutas por rol. Debe ir DENTRO de <ProtectedRoute>.
 *
 * Uso en AppRoutes:
 *   <Route element={<RoleRoute roles={["admin"]} />}>
 *     <Route path="/gestion" element={<GestionPage />} />
 *   </Route>
 *
 * Jerarquía (cada nivel incluye los superiores):
 *   user(0) < moderator(1) < admin(2) < superAdmin(3)
 * ─────────────────────────────────────────────────────────────
 */

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authContext";

const HIERARCHY = { user: 0, moderator: 1, admin: 2, superAdmin: 3 };

function hasAccess(userRole, allowedRoles) {
  if (!userRole) return false;
  const level = HIERARCHY[userRole] ?? -1;
  return allowedRoles.some((r) => level >= (HIERARCHY[r] ?? 0));
}

export default function RoleRoute({ roles = [], redirect = "/unauthorized" }) {
  const { user } = useAuth();
  return hasAccess(user?.role, roles)
    ? <Outlet />
    : <Navigate to={redirect} replace />;
}