// src/pages/errors/UnauthorizedPage.jsx

import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1117] text-white">

      <h1 className="text-6xl font-bold text-red-500">
        403
      </h1>

      <p className="mt-4 text-gray-400">
        No tienes permisos para entrar aquí
      </p>

      <Link
        to="/dashboard"
        className="
          mt-6
          px-5
          py-2
          rounded-lg
          bg-indigo-600
          hover:bg-indigo-500
          transition-colors
        "
      >
        Volver al Dashboard
      </Link>

    </div>
  );
}