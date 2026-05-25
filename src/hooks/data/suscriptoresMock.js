// 🔌 CONECTAR BACKEND: reemplaza con llamadas a tu API

export const STATS = [
  { key: "total",    label: "Total Inscritos",        value: "1,284", trend: { dir: "up",   pct: "4.2%" } },
  { key: "activas",  label: "Suscripciones Activas",  value: "1,102", trend: { dir: "up",   pct: "1.8%" } },
  { key: "vencidas", label: "Suscripciones Vencidas", value: "182",   trend: { dir: "down", pct: "0.5%" } },
  { key: "ingresos", label: "Ingresos (este mes)",    value: "$14.2k", trend: { dir: "up",  pct: "12%"  } },
];

export const SUSCRIPTORES = [
  {
    id: 1,
    initials: "AL",
    color: "bg-emerald-500",
    nombre: "Alejandro López",
    email: "a.lopez@empresa.com",
    estado: "ACTIVO",
    pagos: [1, 1, 1, 1],   // 1 = barra llena, 0 = barra vacía
    plan: "Pro",
  },
  {
    id: 2,
    initials: "MM",
    color: "bg-slate-500",
    nombre: "Mariana Martínez",
    email: "m.martinez@cloud.io",
    estado: "VENCIDO",
    pagos: [1, 1, 0, 0],
    plan: "Basic",
  },
  {
    id: 3,
    initials: "RS",
    color: "bg-blue-500",
    nombre: "Roberto Salazar",
    email: "roberto.sal@webmail.es",
    estado: "ACTIVO",
    pagos: [1, 1, 1, 1],
    plan: "Pro",
  },
  {
    id: 4,
    initials: "CG",
    color: "bg-orange-500",
    nombre: "Claudia García",
    email: "claudia.g@startup.net",
    estado: "ACTIVO",
    pagos: [1, 1, 0, 1],
    plan: "Basic",
  },
];

export const ESTADOS  = ["Todos", "Activo", "Vencido", "Suspendido"];
export const PLANES   = ["Todos", "Pro", "Basic", "Free"];
export const TOTAL    = 1284;
export const PER_PAGE = 4;