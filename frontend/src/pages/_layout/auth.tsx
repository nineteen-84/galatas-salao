import { Outlet } from "react-router";
import { Landmark } from "lucide-react";
import imgHairBackground from "@/assets/auth/fundo-corte-cabelo.jpg"

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      {/* <div
        className="border-foreground/5 text-muted-foreground flex h-full flex-col justify-between border-r bg-cover bg-center p-10"
        style={{ backgroundImage: `url(${imgHairBackground})` }}
      >
        <div className="text-ls text-foreground flex items-center gap-3 font-medium">
          <Landmark className="h-5 w-5" />
          <span className="font-semibold">Galatas</span>
        </div>
        <footer className="text-sm">
          Painel de Acesso &copy; Galatas - {new Date().getFullYear()}
        </footer>
      </div> */}

      <div className="relative border-foreground/5 flex h-full flex-col justify-between border-r p-10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100" 
          style={{ backgroundImage: `url(${imgHairBackground})` }} 
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="text-ls text-foreground flex items-center gap-3 font-medium">
            <Landmark className="h-5 w-5 text-accent" />
            <span className="font-semibold text-accent">Galatas</span>
          </div>

          <footer className="text-sm text-accent">
            Painel de Acesso &copy; Galatas - {new Date().getFullYear()}
          </footer>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-[#2B2D54]">
        <Outlet />
      </div>
    </div>
  );
}