import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInModal() {
  return (
    <DialogContent className="w-96">
      <DialogHeader className="flex flex-col">
        <DialogTitle>Recuperação de Conta.</DialogTitle>
        <DialogDescription>
          Após realizar o envio, encaminharemos para seu endereço o link para efetuar a troca de senha.
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-6">
        <div className="flex gap-2 flex-col">
          <Label htmlFor="email">Email:</Label>
          <Input id="email" type="email" placeholder="Digite aqui..." />
        </div>
        <Button type="submit" className="hover:bg-[#E2C064] cursor-pointer" >Enviar</Button>
      </form>
    </DialogContent>
  );
}