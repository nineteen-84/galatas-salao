import { Landmark } from "lucide-react";
import { Outlet } from "react-router";

import imgHairBackground from "@/assets/auth/fundo-corte-cabelo.jpg"

export function AuthLayout() {
  return (
    <div className="overflow-hidden lg:grid md:grid min-h-screen grid-cols-2 antialiased">
      <div className="relative border-foreground/5 lg:flex h-full flex-col justify-between border-r p-10 hidden md:flex
      ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${imgHairBackground})` }}
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="text-ls text-foreground flex items-center gap-3 font-medium">
            <Landmark className="h-5 w-5 text-accent-foreground" />
            <span className="font-semibold text-accent-foreground">Galatas</span>
          </div>

          <footer className="text-sm text-accent-foreground">
            Painel de Acesso &copy; Galatas - {new Date().getFullYear()}
          </footer>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-background min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}