import { useModeracion }     from "../../hooks/admin/useModeracion";
import ModeracionStats       from "../../components/admin/moderator/ModeracionStats";
import GuiaRapida            from "../../components/admin/moderator/GuiaRapida";
import SolicitudesTable      from "../../components/admin/moderator/SolicitudesTable";

const Moderator = () => {

    const {
        stats, guiaItems,
        solicitudes,
        page, setPage, totalPages, total, perPage,
        handleAprobar, handleRechazar, handleExport,
    } = useModeracion();
    return (
        <div className="flex flex-col gap-5">

            {/* Encabezado */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                    <h1 className="text-xl font-bold text-slate-800">Moderación de Publicaciones</h1>
                    <p className="text-[13px] text-slate-400 mt-0.5">
                        Revisa y gestiona las solicitudes de contenido pendientes de aprobación.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 border border-slate-200 rounded-xl px-3.5 py-2 text-[12.5px] font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="10" y1="18" x2="14" y2="18" />
                        </svg>
                        Filtros
                    </button>
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl px-3.5 py-2 text-[12.5px] font-medium transition-colors"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Exportar
                    </button>
                </div>
            </div>

            {/* Stats */}
            <ModeracionStats stats={stats} />

            {/* Guía */}
            <GuiaRapida items={guiaItems} />

            {/* Tabla */}
            <SolicitudesTable
                solicitudes={solicitudes}
                total={total}
                perPage={perPage}
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
                onAprobar={handleAprobar}
                onRechazar={handleRechazar}
            />

        </div>
    )
}

export default Moderator
