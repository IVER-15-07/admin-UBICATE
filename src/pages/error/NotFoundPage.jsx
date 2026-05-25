// src/pages/errors/NotFoundPage.jsx

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1117] text-white">

      <h1 className="text-7xl font-bold text-indigo-500">
        404
      </h1>

      <p className="mt-4 text-gray-400">
        Página no encontrada
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