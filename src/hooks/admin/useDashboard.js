import { useState } from "react";
import { STATS, CHART_DATA, ACTIVIDAD, SOLICITUDES } from "../data/dashboardMock";

// 🔌 CONECTAR BACKEND:
// import { getStats, getChartData, getActividad, getSolicitudes } from "../../../../services/axios.js";
// y reemplaza los useState por useEffect con las llamadas

export function useDashboard() {
  const [chartRange, setChartRange] = useState("7D");

  // 🔌 Aquí irían tus useEffects cuando conectes el backend:
  // const [stats, setStats] = useState([]);
  // useEffect(() => { getStats().then(r => setStats(r.data)) }, []);

  function handleExportCSV() {
    const headers = ["Usuario", "Tipo", "Fecha", "Estado"];
    const rows = SOLICITUDES.map((s) =>
      [s.usuario, s.tipo, s.fecha, s.estado].join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "solicitudes.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return {
    stats:       STATS,
    chartData:   CHART_DATA[chartRange],
    chartRange,
    setChartRange,
    actividad:   ACTIVIDAD,
    solicitudes: SOLICITUDES,
    handleExportCSV,
  };
}