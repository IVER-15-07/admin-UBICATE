// src/components/layout/Sidebar.jsx

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../routes/authContext";
import {
    DashboardIcon, ModeracionIcon, SuscriptoresIcon,
    ReportesIcon, GestionIcon, CategoriasIcon,
    AjustesIcon, CollapseIcon, LogoutIcon,
} from "../../assets/icons/SidebarIcons";

const NAV_ITEMS = [
    { key: "dashboard", path: "/dashboard", label: "Dashboard", dot: "bg-sky-500" },
    { key: "moderacion", path: "/moderator", label: "Moderación", dot: "bg-slate-300", roles: ["moderator"], icon: <ModeracionIcon /> },
    { key: "suscriptores", path: "/subscribers", label: "Suscriptores", dot: "bg-slate-300", roles: ["moderator"], icon: <SuscriptoresIcon /> },
    { key: "reportes", path: "/reports", label: "Reportes", dot: "bg-slate-300", roles: ["moderator"], icon: <ReportesIcon /> },
    { key: "gestion", path: "/management", label: "Gestión Admin", dot: "bg-amber-500", roles: ["admin"], icon: <GestionIcon /> },
    { key: "categorias", path: "/category", label: "Categorías de Mapa", dot: "bg-slate-300", roles: ["admin"], icon: <CategoriasIcon /> },
    { key: "ajustes", path: "/settings", label: "Ajustes", dot: "bg-slate-300", roles: ["admin"], dividerBefore: true, icon: <AjustesIcon /> },
];

// Agrego dashboard icon aquí para no romper el array arriba
NAV_ITEMS[0].icon = <DashboardIcon />;

const HIERARCHY = { user: 0, moderator: 1, admin: 2, superAdmin: 3 };

function canSee(userRole, itemRoles) {
    if (!itemRoles) return true;
    const level = HIERARCHY[userRole] ?? -1;
    return itemRoles.some((r) => level >= (HIERARCHY[r] ?? 0));
}

export default function Sidebar({ collapsed, setCollapsed }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate("/login", { replace: true });
    }

    const visibleItems = NAV_ITEMS.filter((item) => canSee(user?.role, item.roles));

    return (


        <aside className={`relative flex flex-col bg-white/90 backdrop-blur-sm border-r border-slate-200 transition-all duration-300 ease-in-out overflow-hidden shrink-0 ${collapsed ? "w-16" : "w-64"}`}>

            {/* Logo */}
            <div className="flex items-center gap-2.5 h-14 px-4 border-b border-slate-100 shrink-0 overflow-hidden">
                <div className="w-8 h-8 rounded-xl bg-linear-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md shadow-sky-500/25">
                    AP
                </div>
                {!collapsed && (
                    <div className="leading-tight overflow-hidden">
                        <p className="text-[13px] font-semibold text-slate-800 truncate">AdminPortal</p>
                        <p className="text-[10px] text-slate-400">Panel de Control</p>
                    </div>
                )}
            </div>

            {/* Nav — flex-1 + justify-center para centrar verticalmente */}
            <nav className="flex flex-col flex-1 px-2.5 py-4 overflow-y-auto overflow-x-hidden justify-center gap-1">
                {visibleItems.map((item) => (
                    <div key={item.key}>
                        {item.dividerBefore && <div className="h-px bg-slate-100 my-2 mx-1" />}
                        <NavLink
                            to={item.path}
                            title={collapsed ? item.label : undefined}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-[12.5px] font-medium transition-colors overflow-hidden whitespace-nowrap
            ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={`shrink-0 ${isActive ? "text-blue-600" : "text-slate-400"}`}>{item.icon}</span>
                                    {!collapsed && <span className="truncate">{item.label}</span>}
                                    {!collapsed && <span className={`ml-auto w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-blue-500" : item.dot}`} />}
                                </>
                            )}
                        </NavLink>
                    </div>
                ))}
            </nav>

            {/* Collapse btn */}
            <div className="px-2.5 pb-2 shrink-0">
                <button
                    onClick={() => setCollapsed((c) => !c)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-[12px] font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                >
                    <span className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}>
                        <CollapseIcon />
                    </span>
                    {!collapsed && <span>Contraer</span>}
                </button>
            </div>

            {/* User card */}
            <div className="px-2.5 pb-3 shrink-0">
                {collapsed ? (
                    <button onClick={handleLogout} title="Cerrar sesión" className="w-full flex justify-center py-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs">
                            {user?.name?.charAt(0) ?? "A"}
                        </div>
                    </button>
                ) : (
                    <div className="rounded-2xl bg-linear-to-br from-sky-500 to-blue-700 p-3.5 text-white shadow-md shadow-sky-500/20">
                        <p className="text-[9px] uppercase tracking-widest text-white/60 mb-1">Sesión activa</p>
                        <p className="text-[13px] font-semibold leading-tight truncate">{user?.name}</p>
                        <p className="text-[11px] text-white/70 capitalize mb-3">{user?.role}</p>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-white/15 hover:bg-white/25 transition-colors py-1.5 text-[11px] font-medium"
                        >
                            <LogoutIcon />
                            Cerrar sesión
                        </button>
                    </div>
                )}
            </div>

        </aside>
    );
}