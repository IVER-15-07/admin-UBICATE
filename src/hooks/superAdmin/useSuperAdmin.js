import { useState } from "react";
import { ADMINISTRADORES, PRECIOS_INICIALES, RECAUDACION } from "../data/superAdminMock";

// 🔌 CONECTAR BACKEND:
// import { getAdmins, createAdmin, deleteAdmin, updatePrecios } from "../../../services/axios.js";

export function useSuperAdmin() {
  const [admins, setAdmins]         = useState(ADMINISTRADORES);
  const [precios, setPrecios]       = useState(PRECIOS_INICIALES);
  const [guardando, setGuardando]   = useState(false);
  const [guardado, setGuardado]     = useState(false);

  function handlePrecioChange(field, value) {
    setGuardado(false);
    setPrecios((prev) => ({ ...prev, [field]: value }));
  }

  async function handleGuardarTarifas() {
    setGuardando(true);
    // 🔌 CONECTAR BACKEND: await updatePrecios(precios)
    await new Promise((r) => setTimeout(r, 700)); // mock delay
    setGuardando(false);
    setGuardado(true);
  }

  function handleNuevoAdmin() {
    // 🔌 CONECTAR BACKEND: abrir modal o navegar a /super-admin/nuevo
    console.log("Nuevo administrador");
  }

  function handleEditar(id) {
    // 🔌 CONECTAR BACKEND: abrir modal de edición con datos del admin
    console.log("Editar admin:", id);
  }

  function handleEliminar(id) {
    // 🔌 CONECTAR BACKEND: await deleteAdmin(id) + refetch
    setAdmins((prev) => prev.filter((a) => a.id !== id));
  }

  return {
    admins,
    precios,
    recaudacion: RECAUDACION,
    guardando,
    guardado,
    handlePrecioChange,
    handleGuardarTarifas,
    handleNuevoAdmin,
    handleEditar,
    handleEliminar,
  };
}