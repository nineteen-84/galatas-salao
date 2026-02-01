import { Outlet } from "react-router";

import { Header } from "../../components/header";

export function AppLayout() {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen antialiased">
      <Header />

      <div className="bg-[#2B2D54] flex-1">
        <Outlet />
      </div>
    </div>
  );
}