// src/layouts/AdminLayout.jsx

import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-[#eef2f8] text-slate-900">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto px-5 py-5 lg:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}