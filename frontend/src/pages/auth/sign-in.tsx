import logo from "@/assets/auth/logo.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableCell } from "@/components/ui/table";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { SignInModal } from "./sign-in-modal";
import { z } from "zod";
import { toast } from "sonner";

const signInForm = z.object({
  email: z.email().min(1),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? "",
    }
  });

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Seu login foi realizado com sucesso!");
      navigate("/");
    } catch {
      toast.error("Credenciais Inválidas! Tente novamente.");
    }
  }

  return (
    <>
      <Dialog>
        <div className="p-8">
          <div className="flex flex-col gap-2 text-center items-center">
            <img src={logo} className="h-65 w-65" />
          </div>
          <form className="flex flex-col gap-12" onSubmit={handleSubmit(handleSignIn)}>

            <div className="space-y-4">
              <div className="flex gap-2 flex-col">
                <Label htmlFor="email" className="text-muted pl-2">Email:</Label>
                <Input
                  className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent"
                  id="email"
                  type="email"
                  {...register('email')}
                />
              </div>

              <div className="flex gap-2 flex-col">
                <Label htmlFor="password" className="text-muted pl-2">Senha:</Label>
                <Input
                  className="border-[#E2C064] border-t-0 border-r-0 border-l-0 text-accent"
                  id="password"
                  type="password"
                  {...register('password')}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button className="w-full bg-[#E2C064] cursor-pointer" type="submit" disabled={isSubmitting}>
                Entrar
              </Button>

              <TableCell>
                <DialogTrigger asChild>
                  <Button variant="link" size="sm">
                    <span className="text-[#E2C064] underline underline-offset-8 hover:text-accent cursor-pointer">
                      Esqueceu a senha?</span>
                  </Button>
                </DialogTrigger>

                
              </TableCell>

              <Label className="text-muted flex flex-row gap-2 mt-12">Não possui uma conta?
                <Link to="/sign-up" className="underline underline-offset-8 hover:text-[#E2C064]">Registrar-se</Link>
              </Label>
            </div>
          </form>

          <SignInModal />
        </div>
      </Dialog>
    </>
  );
}