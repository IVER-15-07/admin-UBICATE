/**
 * src/routes/authContext.jsx
 * ─────────────────────────────────────────────────────────────
 * Estado global de autenticación.
 * MOCK activo — cuando tengas backend busca los comentarios
 * marcados con 🔌 CONECTAR BACKEND y reemplaza sólo esas líneas.
 * ─────────────────────────────────────────────────────────────
 */

import { createContext, useContext, useState, useEffect } from "react";

// 🔌 CONECTAR BACKEND: descomenta tu servicio
// import { loginRequest, logoutRequest, getMeRequest } from "../services/axios.js";

/* ── MOCK usuarios ─────────────────────────────────────────── */
const MOCK_USERS = [
  {
    id: 1,
    name: "Super Admin",
    email: "superadmin@portal.com",
    password: "1234",
    role: "superAdmin",
  },
  {
    id: 2,
    name: "Admin",
    email: "admin@portal.com",
    password: "1234",
    role: "admin",
  },
];

const fakeDelay = (ms = 500) => new Promise((r) => setTimeout(r, ms));
/* ─────────────────────────────────────────────────────────── */

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true); // sesión inicial
  const [error, setError]     = useState(null);

  /* Verificar sesión al montar (refresh / reload) */
  useEffect(() => { checkSession(); }, []);

  async function checkSession() {
    setLoading(true);
    try {
      // 🔌 CONECTAR BACKEND → const { data } = await getMeRequest();
      //                        setUser(data.user); return;
      await fakeDelay(300);
      const stored = localStorage.getItem("mock_user");
      if (stored) setUser(JSON.parse(stored));
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login({ email, password }) {
    setLoading(true);
    setError(null);
    try {
      // 🔌 CONECTAR BACKEND → const { data } = await loginRequest({ email, password });
      //                        setUser(data.user); return data.user;
      await fakeDelay(600);
      const found = MOCK_USERS.find(
        (u) => u.email === email && u.password === password
      );
      if (!found) throw new Error("Credenciales incorrectas");
      const { password: _p, ...safe } = found;
      localStorage.setItem("mock_user", JSON.stringify(safe));
      setUser(safe);
      return safe;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    // 🔌 CONECTAR BACKEND → await logoutRequest();
    localStorage.removeItem("mock_user");
    setUser(null);
  }

  /* Helpers de rol con jerarquía */
  const isSuperAdmin = user?.role === "superAdmin";
  const isAdmin      = user?.role === "admin" || isSuperAdmin;

  return (
    <AuthContext.Provider value={{
      user, loading, error,
      isAuthenticated: !!user,
      isSuperAdmin, isAdmin,
      login, logout, checkSession,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}