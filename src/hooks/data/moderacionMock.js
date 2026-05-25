// 🔌 CONECTAR BACKEND: reemplaza con llamadas a tu API

export const STATS = [
  {
    key: "pendientes",
    label: "Pendientes hoy",
    value: "24",
    suffix: "solicitudes",
    trend: { dir: "up", pct: "12%", label: "vs ayer" },
    icon: "chart",
    color: "green",
  },
  {
    key: "tiempo",
    label: "Tiempo prom. respuesta",
    value: "1.4 horas",
    suffix: null,
    meta: "Meta: < 2 horas",
    icon: "clock",
    color: "slate",
  },
  {
    key: "rechazo",
    label: "Tasa de rechazo",
    value: "8.5%",
    suffix: null,
    trend: { dir: "down", pct: "2%", label: "vs mes pasado" },
    icon: "thumb",
    color: "slate",
  },
];

export const GUIA_ITEMS = [
  "Imágenes válidas y nítidas",
  "Lenguaje apropiado y respetuoso",
  "Ubicación geográfica correcta",
];

export const SOLICITUDES = [
  {
    id: 1,
    initials: "CM",
    color: "bg-teal-500",
    nombre: "Carlos Mendoza",
    email: "carlos.m@example.com",
    tipo: "Evento Comunitario",
    fecha: "24 Mayo, 2024 · 10:30 AM",
  },
  {
    id: 2,
    initials: "LR",
    color: "bg-blue-500",
    nombre: "Laura Rivas",
    email: "l.rivas@webmail.es",
    tipo: "Anuncio Clasificado",
    fecha: "24 Mayo, 2024 · 09:15 AM",
  },
  {
    id: 3,
    initials: "JP",
    color: "bg-violet-500",
    nombre: "Jorge Pineda",
    email: "pineda.j@work.com",
    tipo: "Alerta de Seguridad",
    fecha: "23 Mayo, 2024 · 06:45 PM",
  },
];

export const TOTAL = 12;