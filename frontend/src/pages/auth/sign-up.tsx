import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function SignUp() {
  return (
    <div>
      <Button variant="secondary" asChild className="absolute top-8 right-8">
        <Link to="/sign-in">Fazer login</Link>
      </Button>

      Cadastro
    </div>
  );
}