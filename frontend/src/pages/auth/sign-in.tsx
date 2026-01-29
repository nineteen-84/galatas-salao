import logo from "@/assets/auth/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export function SignIn() {
  return (
    <div>
      <div className="p-8">
        <Button variant="secondary" asChild className="absolute top-8 right-8">
          <Link to="/sign-up">Novo cliente</Link>
        </Button>

        <div className="flex flex-col gap-2 text-center items-center">
          <img src={logo} className="h-[260px] w-[260px]" />
          {/* <h1 className="text-2xl font-semibold tracking-tight text-muted">
            Acessar painel
          </h1> */}
          {/* <p className="text-muted text-sm">
            Acompanhe suas vendas pelo painel do parceiro!
          </p> */}
        </div>

        <form className="flex flex-col gap-12">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted">Email:</Label>
            <Input id="email" type="email" placeholder="Digite aqui..." />

            <Label htmlFor="password" className="text-muted">Senha:</Label>
            <Input id="password" type="password" placeholder="Digite aqui..." />
          </div>

          <div className="flex flex-col">
            <Button className="w-full" type="submit">Entrar</Button>
            <span className="text-muted">Esqueceu a senha?</span>
          </div>
        </form>

        <label className="text-muted">Não possui uma conta? <span>Registrar</span></label>
      </div>
    </div>
  );
}