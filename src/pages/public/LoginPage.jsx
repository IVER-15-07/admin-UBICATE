/**
 * src/pages/public/LoginPage.jsx
 * ─────────────────────────────────────────────────────────────
 * Página de login pública.
 * Acepta: admin@portal.com / 1234
 *         superadmin@portal.com / 1234
 *
 * Al autenticar redirige a la ruta de origen (si existe)
 * o a /dashboard por defecto.
 * ─────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../routes/authContext";

export default function LoginPage() {
  const { login, loading } = useAuth();
  const navigate  = useNavigate();
  const location  = useLocation();
  const from      = location.state?.from?.pathname || "/dashboard";

  const [form, setForm]     = useState({ email: "", password: "" });
  const [error, setError]   = useState("");
  const [show, setShow]     = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Completa todos los campos.");
      return;
    }
    try {
      await login(form);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Error al iniciar sesión.");
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-sm bg-[#13151c] border border-[#1e2130] rounded-2xl p-8 shadow-xl">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-sky-600 to-blue-700 flex items-center justify-center font-bold text-white text-sm mb-3 shadow-lg shadow-sky-600/20">
            AP
          </div>
          <h1 className="text-lg font-semibold text-[#e8eaf0] tracking-tight">AdminPortal</h1>
          <p className="text-xs text-[#5a607a] mt-1">Ingresa tus credenciales para continuar</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#5a607a]">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="correo@portal.com"
              autoComplete="email"
              className="bg-[#0f1117] border border-[#1e2130] rounded-lg px-3 py-2.5 text-sm text-[#c8cfe8] placeholder:text-[#3a4060] outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#5a607a]">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full bg-[#0f1117] border border-[#1e2130] rounded-lg px-3 py-2.5 pr-10 text-sm text-[#c8cfe8] placeholder:text-[#3a4060] outline-none focus:border-indigo-500 transition-colors"
              />
              {/* Toggle mostrar contraseña */}
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3a4060] hover:text-[#818cf8] transition-colors"
                aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {show ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              <span className="text-red-400 text-xs">⚠</span>
              <p className="text-xs text-red-400">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-semibold text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Ingresando…
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </form>

        {/* Divider + hint mock */}
        <div className="mt-6 pt-5 border-t border-[#1e2130]">
          <p className="text-center text-[11px] text-[#3a4060] mb-2">Cuentas de prueba</p>
          <div className="flex flex-col gap-1.5">
            <MockHint
              label="Admin"
              email="admin@portal.com"
              onClick={() => setForm({ email: "admin@portal.com", password: "1234" })}
            />
            <MockHint
              label="Super Admin"
              email="superadmin@portal.com"
              onClick={() => setForm({ email: "superadmin@portal.com", password: "1234" })}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Sub-componentes ─────────────────────────────────────── */

function MockHint({ label, email, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-[#0f1117] border border-[#1e2130] hover:border-indigo-500/40 transition-colors group"
    >
      <span className="text-[11px] font-medium text-[#5a607a] group-hover:text-[#818cf8] transition-colors">
        {label}
      </span>
      <span className="text-[11px] text-[#3a4060] group-hover:text-[#5a607a] transition-colors font-mono">
        {email}
      </span>
    </button>
  );
}

function Eye() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOff() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}