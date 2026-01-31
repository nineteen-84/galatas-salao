import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// eslint-disable-next-line
const signInRecoverForm = z.object({
  email: z.email().min(1),
});

type SignInRecoverPassword = z.infer<typeof signInRecoverForm>;

export function SignInModal() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInRecoverPassword>();

  async function handleRecoverPassword(email: SignInRecoverPassword) {
    try {
      console.log(email);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Foi enviado um link de recuperação para o seu email.");
    } catch {
      toast.error("Não foi possível enviar o link para redefinição de senha.");
    }
  }

  return (
    <DialogContent className="w-96">
      <DialogHeader className="flex flex-col">
        <DialogTitle>Recuperação de Conta.</DialogTitle>
        <DialogDescription>
          Após realizar o envio, encaminharemos para seu endereço o link para efetuar a troca de senha.
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-6" onSubmit={handleSubmit(handleRecoverPassword)}>
        <div className="flex gap-2 flex-col">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite aqui..."
            {...register("email")}
          />
        </div>
        <Button
          type="submit"
          className="hover:bg-[#E2C064] cursor-pointer"
          disabled={isSubmitting}
        >Enviar</Button>
      </form>
    </DialogContent>
  );
}