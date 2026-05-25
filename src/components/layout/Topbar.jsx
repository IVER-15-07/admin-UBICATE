// src/components/layout/Topbar.jsx

export default function Topbar() {
	return (
		<header className="flex h-16 items-center justify-between border-b border-[#d9e0ea] bg-white/85 px-5 backdrop-blur">
			<div className="flex min-w-0 flex-1 items-center gap-3">
				<div className="hidden h-10 w-full max-w-md items-center rounded-xl border border-[#e6ebf2] bg-[#f7f9fc] px-4 text-sm text-slate-400 shadow-sm sm:flex">
					<span className="mr-2 text-slate-500">⌕</span>
					<span>Buscar métricas, usuarios, solicitudes...</span>
				</div>
			</div>

			<div className="flex items-center gap-3 text-slate-500">
				<button
					type="button"
					className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6ebf2] bg-white transition-colors hover:bg-slate-50"
					aria-label="Notificaciones"
				>
					🔔
				</button>
				<button
					type="button"
					className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6ebf2] bg-white transition-colors hover:bg-slate-50"
					aria-label="Ayuda"
				>
					?
				</button>
				<button
					type="button"
					className="flex items-center gap-2 rounded-full border border-[#e6ebf2] bg-white px-2 py-1 pr-3 transition-colors hover:bg-slate-50"
				>
					<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-blue-700 text-xs font-semibold text-white">A</span>
					<span className="hidden text-sm font-medium text-slate-700 sm:inline">Admin</span>
					<span className="text-xs">⌄</span>
				</button>
			</div>
		</header>
	);
}
