import { Outlet } from "react-router";
import { Landmark } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-ls text-foreground flex items-center gap-3 font-medium">
          <Landmark className="h-5 w-5" />
          <span className="font-semibold">Galatas</span>
        </div>
        <footer className="text-sm">  
          Painel de Acesso &copy; Galatas - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-[#2B2D54]">
        <Outlet />
      </div>
    </div>
  );
}