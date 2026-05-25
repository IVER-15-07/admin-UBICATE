// 🔌 CONECTAR BACKEND: reemplaza con llamadas a tu API

export const ADMINISTRADORES = [
  { id: 1, nombre: "Carlos Mendoza",  rol: "Moderador Senior",    fecha: "12 Oct 2023", estado: "Aprobado"  },
  { id: 2, nombre: "Elena Rivas",     rol: "Editor de Contenido", fecha: "05 Ene 2024", estado: "Aprobado"  },
  { id: 3, nombre: "Marcos Solís",    rol: "Soporte Técnico",     fecha: "28 Feb 2024", estado: "Pendiente" },
  { id: 4, nombre: "Lucía Fernández", rol: "Analista de Datos",   fecha: "15 Mar 2024", estado: "Aprobado"  },
];

export const PRECIOS_INICIALES = {
  creacion:   1500.00,
  renovacion: 250.00,
};

export const RECAUDACION = {
  valor: "$14,280",
  trend: { dir: "up", pct: "12.4%", label: "respecto al mes anterior" },
};