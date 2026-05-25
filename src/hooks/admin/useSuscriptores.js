import { useState } from "react";
import { STATS, SUSCRIPTORES, ESTADOS, PLANES, TOTAL, PER_PAGE } from "../data/suscriptoresMock";

// 🔌 CONECTAR BACKEND:
// import { getSuscriptores, deleteSuscriptor } from "../../../../services/axios.js";

export function useSuscriptores() {
  const [page, setPage]         = useState(1);
  const [estado, setEstado]     = useState("Todos");
  const [plan, setPlan]         = useState("Todos");

  const totalPages = Math.ceil(TOTAL / PER_PAGE);

  // 🔌 Filtro local — con backend va como query param
  const filtered = SUSCRIPTORES.filter((s) => {
    const okEstado = estado === "Todos" || s.estado.toLowerCase() === estado.toLowerCase();
    const okPlan   = plan   === "Todos" || s.plan   === plan;
    return okEstado && okPlan;
  });

  function handleEditar(id) {
    // 🔌 CONECTAR BACKEND: navegar a /suscriptores/:id/editar
    console.log("Editar:", id);
  }

  function handleEliminar(id) {
    // 🔌 CONECTAR BACKEND: await deleteSuscriptor(id) + refetch
    console.log("Eliminar:", id);
  }

  function handleExportCSV() {
    const headers = ["Nombre", "Email", "Estado", "Plan"];
    const rows    = SUSCRIPTORES.map((s) =>
      [s.nombre, s.email, s.estado, s.plan].join(",")
    );
    const csv  = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "suscriptores.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImprimir() {
    window.print();
  }

  return {
    stats: STATS,
    suscriptores: filtered,
    estados: ESTADOS,
    planes: PLANES,
    estado, setEstado,
    plan, setPlan,
    page, setPage,
    totalPages,
    total: TOTAL,
    perPage: PER_PAGE,
    handleEditar,
    handleEliminar,
    handleExportCSV,
    handleImprimir,
  };
}