import { useState } from "react";
import { STATS, GUIA_ITEMS, SOLICITUDES, TOTAL } from "../data/moderacionMock";

// 🔌 CONECTAR BACKEND:
// import { getSolicitudes, aprobarSolicitud, rechazarSolicitud } from "../../../../services/axios.js";

const PER_PAGE = 3;

export function useModeracion() {
  const [page, setPage]   = useState(1);
  const [search, setSearch] = useState("");

  const totalPages = Math.ceil(TOTAL / PER_PAGE);

  // 🔌 Filtro local — con backend esto lo maneja el query param
  const filtered = SOLICITUDES.filter((s) =>
    s.nombre.toLowerCase().includes(search.toLowerCase()) ||
    s.tipo.toLowerCase().includes(search.toLowerCase())
  );

  function handleAprobar(id) {
    // 🔌 CONECTAR BACKEND: await aprobarSolicitud(id)
    console.log("Aprobar:", id);
  }

  function handleRechazar(id) {
    // 🔌 CONECTAR BACKEND: await rechazarSolicitud(id)
    console.log("Rechazar:", id);
  }

  function handleExport() {
    const headers = ["Nombre", "Email", "Tipo", "Fecha"];
    const rows = SOLICITUDES.map((s) =>
      [s.nombre, s.email, s.tipo, s.fecha].join(",")
    );
    const csv  = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "moderacion.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return {
    stats:      STATS,
    guiaItems:  GUIA_ITEMS,
    solicitudes: filtered,
    search, setSearch,
    page, setPage,
    totalPages,
    total: TOTAL,
    perPage: PER_PAGE,
    handleAprobar,
    handleRechazar,
    handleExport,
  };
}