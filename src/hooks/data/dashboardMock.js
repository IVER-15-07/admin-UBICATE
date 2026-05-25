// 🔌 CONECTAR BACKEND: reemplaza estos datos con llamadas a tu API

export const STATS = [
  {
    key: "suscriptores",
    label: "Suscriptores Activos",
    value: "12,842",
    trend: { dir: "up", pct: "8.2%", label: "vs. mes anterior" },
    icon: "users",
    color: "blue",
  },
  {
    key: "solicitudes",
    label: "Solicitudes Pendientes",
    value: "45",
    trend: { dir: "up", pct: "12%", label: "Revisión prioritaria" },
    icon: "clipboard",
    color: "orange",
  },
  {
    key: "pagos",
    label: "Pagos Pendientes",
    value: "$3,240",
    trend: { dir: "down", pct: "4.1%", label: "Excelente recaudación" },
    icon: "wallet",
    color: "green",
  },
];

export const CHART_DATA = {
  "7D": [
    { day: "Lun", value: 55 },
    { day: "Mar", value: 72 },
    { day: "Mié", value: 61 },
    { day: "Jue", value: 90 },
    { day: "Vie", value: 78 },
    { day: "Sáb", value: 48 },
    { day: "Dom", value: 65 },
  ],
  "1M": [
    { day: "S1",  value: 60 },
    { day: "S2",  value: 75 },
    { day: "S3",  value: 55 },
    { day: "S4",  value: 85 },
  ],
  "1Y": [
    { day: "Ene", value: 40 },
    { day: "Feb", value: 55 },
    { day: "Mar", value: 50 },
    { day: "Abr", value: 70 },
    { day: "May", value: 65 },
    { day: "Jun", value: 80 },
    { day: "Jul", value: 75 },
    { day: "Ago", value: 90 },
    { day: "Sep", value: 85 },
    { day: "Oct", value: 95 },
    { day: "Nov", value: 88 },
    { day: "Dic", value: 100 },
  ],
};

export const ACTIVIDAD = [
  {
    id: 1,
    type: "success",
    title: "Pago verificado",
    desc: "de Premium Anual (#4492)",
    time: "Hace 12 min",
  },
  {
    id: 2,
    type: "info",
    title: "Nuevo usuario",
    desc: "Carlos Méndez se registró.",
    time: "Hace 45 min",
  },
  {
    id: 3,
    type: "warning",
    title: "Publicación rechazada",
    desc: "",
    time: "",
  },
];

export const SOLICITUDES = [
  { id: 1, usuario: "Juan Pérez",       tipo: "Venta Inmueble",     fecha: "12 Oct, 2023", estado: "Aprobado"  },
  { id: 2, usuario: "María García",     tipo: "Anuncio Local",      fecha: "12 Oct, 2023", estado: "Pendiente" },
  { id: 3, usuario: "Empresa Tech S.A", tipo: "Banner Publicitario", fecha: "11 Oct, 2023", estado: "Aprobado"  },
];