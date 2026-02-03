import { Link } from "react-router";

import { ModeToggle } from "./theme/theme-toggle";

export function Header() {
  return (
    <header className="bg-background shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-accent-foreground">Galatas</span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Olá,</span>
              <span className="text-sm font-medium text-accent-foreground">Visitante</span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}