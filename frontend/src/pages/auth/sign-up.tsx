import logo from "@/assets/auth/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export function SignUp() {
  return (
    <>
      <div className="p-8">
        <div className="flex flex-col gap-2 text-center items-center">
          <img src={logo} className="h-65 w-65" />
        </div>
        <form className="flex flex-col gap-12">

          <div className="space-y-4">
            <div className="flex gap-2 flex-col">
              <Label htmlFor="name" className="text-muted pl-2">Nome Completo:</Label>
              <Input className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent" id="name" type="text" />
            </div>

            <div className="flex gap-2 flex-col">
              <Label htmlFor="email" className="text-muted pl-2">Email:</Label>
              <Input className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent" id="email" type="email" />
            </div>

            <div className="grid grid-cols-4 gap-8">
              <div className="flex gap-2 flex-col col-span-2">
                <Label htmlFor="tel" className="text-muted pl-2">Telefone:</Label>
                <Input className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent" id="tel" type="tel" />
              </div>

              <div className="flex gap-2 flex-col col-span-2">
                <Label htmlFor="CPF" className="text-muted pl-2">CPF:</Label>
                <Input className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent" id="CPF" type="number" />
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <Label htmlFor="password" className="text-muted pl-2">Senha:</Label>
              <Input className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent" id="password" type="password" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button asChild className="w-full bg-[#E2C064] cursor-pointer" type="submit">
              <Link to="/sign-in">Registrar</Link>
            </Button>

            <p className="text-accent px-6 text-center text-sm leading-relaxed w-82">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>

            <Label className="text-muted flex flex-row gap-2 mt-12">Já possuí uma conta?
              <Link to="/sign-in" className="underline underline-offset-8 hover:text-[#E2C064]">Entrar</Link>
            </Label>
          </div>
        </form>
      </div>
    </>
  );
}