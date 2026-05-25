const RANGES = ["7D", "1M", "1Y"];

export default function EvolucionChart({ data, range, onRangeChange }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">Evolución de Suscripciones</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Datos semanales actualizados</p>
        </div>
        <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => onRangeChange(r)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors
                ${range === r ? "bg-white text-slate-700 shadow-xs" : "text-slate-400 hover:text-slate-600"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Barras */}
      <div className="flex items-end gap-2 h-28 px-1">
        {data.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full rounded-t-md bg-blue-100 hover:bg-blue-400 transition-colors cursor-pointer relative group"
              style={{ height: `${(d.value / max) * 100}%` }}
            >
              {/* Tooltip */}
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {d.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Labels */}
      <div className="flex gap-2 px-1">
        {data.map((d, i) => (
          <p key={i} className="flex-1 text-center text-[10px] text-slate-400">{d.day}</p>
        ))}
      </div>
    </div>
  );
}