import { useEffect, useState } from "react";
import { PRECIOS_INICIALES, RECAUDACION } from "../data/superAdminMock";
import { superAdminService } from "../../services/superAdmin/superAdminService";

const ROLE_LABELS = {
  1: "SUPER ADMIN",
  2: "ADMINISTRADOR",
  3: "Soporte",
};

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function mapAdmin(admin) {
  return {
    id: admin.id,
    nombre: admin.nombre,
    email: admin.email,
    roleId: admin.roleId,
    rol: ROLE_LABELS[admin.roleId] ?? `Rol ${admin.roleId ?? "-"}`,
    fecha: formatDate(admin.creadoEn),
    estado: "Activo",
  };
}

export function useSuperAdmin() {
  const [admins, setAdmins] = useState([]);
  const [precios, setPrecios] = useState(PRECIOS_INICIALES);
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState(false);
  const [loadingAdmins, setLoadingAdmins] = useState(false);
  const [modal, setModal] = useState({ open: false, mode: "create", target: null });
  const [form, setForm] = useState({ nombre: "", email: "", password: "", confirmPassword: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAdmins();
  }, []);

  async function loadAdmins() {
    setLoadingAdmins(true);
    setError("");
    try {
      const response = await superAdminService.obtenerTodosLosAdmins();
      const list = Array.isArray(response) ? response : response?.data ?? response?.content ?? [];
      setAdmins(list.map(mapAdmin));
    } catch {
      setError("No se pudieron cargar los administradores");
    } finally {
      setLoadingAdmins(false);
    }
  }

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
    setError("");
    setForm({ nombre: "", email: "", password: "", confirmPassword: "" });
    setModal({ open: true, mode: "create", target: null });
  }

  function handleEditar(id) {
    const target = admins.find((admin) => admin.id === id);
    if (!target) return;

    setError("");
    setForm({
      nombre: target.nombre ?? "",
      email: target.email ?? "",
      password: "",
      confirmPassword: "",
    });
    setModal({ open: true, mode: "edit", target });
  }

  function handleEliminar(id) {
    const target = admins.find((admin) => admin.id === id);
    if (!target) return;

    setError("");
    setModal({ open: true, mode: "delete", target });
  }

  function handleCloseModal() {
    if (submitting) return;
    setModal({ open: false, mode: "create", target: null });
    setError("");
  }

  function handleFormChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleConfirmModal() {
    if (modal.mode === "delete") {
      setSubmitting(true);
      setError("");
      try {
        await superAdminService.eliminarAdmin(modal.target.id);
        await loadAdmins();
        handleCloseModal();
      } catch {
        setError("No se pudo eliminar el administrador");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (modal.mode === "create" && !form.password.trim()) {
      setError("La contraseña es obligatoria");
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const payload = {
        nombre: form.nombre,
        email: form.email,
        password: form.password,
      };

      if (modal.mode === "create") {
        await superAdminService.crearCuentaAdmin(payload);
      } else if (modal.mode === "edit" && modal.target) {
        await superAdminService.actualizarAdmin(modal.target.id, payload);
      }
      await loadAdmins();
      handleCloseModal();
    } catch {
      setError("No se pudo guardar el administrador");
    } finally {
      setSubmitting(false);
    }
  }

  return {
    admins,
    loadingAdmins,
    precios,
    recaudacion: RECAUDACION,
    guardando,
    guardado,
    modal,
    form,
    submitting,
    error,
    handlePrecioChange,
    handleGuardarTarifas,
    handleNuevoAdmin,
    handleEditar,
    handleEliminar,
    handleCloseModal,
    handleConfirmModal,
    handleFormChange,
  };
}