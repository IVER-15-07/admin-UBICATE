const TYPE_STYLES = {
  success: { dot: "bg-emerald-400", bg: "bg-emerald-50" },
  info:    { dot: "bg-blue-400",    bg: "bg-blue-50"    },
  warning: { dot: "bg-amber-400",   bg: "bg-amber-50"   },
};

export default function ActividadReciente({ actividad }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-5 flex flex-col gap-4">
      <p className="text-sm font-semibold text-slate-700">Actividad Reciente</p>

      <div className="flex flex-col gap-3">
        {actividad.map((item) => {
          const s = TYPE_STYLES[item.type];
          return (
            <div key={item.id} className="flex gap-3 items-start">
              <div className={`mt-0.5 w-7 h-7 rounded-full ${s.bg} flex items-center justify-center shrink-0`}>
                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12.5px] text-slate-700 leading-snug">
                  <span className="font-semibold">{item.title}</span>
                  {item.desc && <span className="text-slate-500"> {item.desc}</span>}
                </p>
                {item.time && <p className="text-[11px] text-slate-400 mt-0.5">{item.time}</p>}
              </div>
            </div>
          );
        })}
      </div>

      <button className="text-[12px] text-blue-600 hover:text-blue-700 font-medium text-left transition-colors mt-auto">
        Ver todo el historial →
      </button>
    </div>
  );
}