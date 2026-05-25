/**
 * src/routes/ProtectedRoute.jsx
 * ─────────────────────────────────────────────────────────────
 * Protege rutas que requieren sesión activa.
 * Sin sesión → redirige a /login guardando la ruta de origen.
 * Mientras verifica → spinner de pantalla completa.
 * ─────────────────────────────────────────────────────────────
 */

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./authContext";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0f1117] gap-4">
      <div className="w-9 h-9 rounded-full border-[3px] border-[#1e2130] border-t-indigo-500 animate-spin" />
      <p className="text-sm text-[#5a607a] font-medium">Verificando sesión…</p>
    </div>
  );
}