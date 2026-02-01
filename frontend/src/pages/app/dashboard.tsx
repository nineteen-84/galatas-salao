import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

import logo from "@/assets/auth/logo.png";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="p-8">
        <div className="flex flex-col gap-2 text-center items-center mb-12">
          <img src={logo} className="h-65 w-65" />
          <Label className="text-2xl font-semibold text-accent mt-4">
            Em construção!
          </Label>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button asChild className="w-24 bg-[#E2C064]">
            <Link to="/sign-in">Login</Link>
          </Button>
          <Button asChild className="w-24 bg-[#E2C064]">
            <Link to="/sign-up">Registro</Link>
          </Button>
        </div>
      </div>
    </>
  );
}