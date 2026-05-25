// Solo ensambla — cero lógica aquí
import { useDashboard } from "../../hooks/admin/useDashboard";
import StatsCards from "../../components/admin/dashboard/StatsCards";
import EvolucionChart from "../../components/admin/dashboard/EvolucionChart";
import ActividadReciente from "../../components/admin/dashboard/ActividadReciente";
import SolicitudesTable from "../../components/admin/dashboard/SolicitudesTable";



const DashboardPage = () => {

    const {
        stats, chartData, chartRange, setChartRange,
        actividad, solicitudes, handleExportCSV,
    } = useDashboard();

    return (
       <div className="flex flex-col gap-5">

      {/* Encabezado */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">Resumen General</h1>
        <p className="text-[13px] text-slate-400 mt-0.5">
          Bienvenido de nuevo. Aquí tienes un vistazo de las métricas clave hoy.
        </p>
      </div>

      {/* Fila 1 — stats */}
      <StatsCards stats={stats} />

      {/* Fila 2 — gráfica + actividad */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">
        <EvolucionChart
          data={chartData}
          range={chartRange}
          onRangeChange={setChartRange}
        />
        <ActividadReciente actividad={actividad} />
      </div>

      {/* Fila 3 — tabla */}
      <SolicitudesTable
        solicitudes={solicitudes}
        onExport={handleExportCSV}
      />

    </div>
    )
}

export default DashboardPage
