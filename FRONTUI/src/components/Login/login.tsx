import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Api
import api from "@/services/api";

//React e Router
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data: token } = await api.post("/login", { email, password });
      localStorage.setItem("token", token);
      navigate("../home");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Scheduled: Catch up",
      });
    }
  };

  return (
    <form className={cn("flex flex-col gap-6")} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Entre na sua conta</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Insira seu e-mail abaixo para fazer login em sua conta
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>

          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Conecte-se
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-20 bg-background px-2 text-muted-foreground">
            &copy;2025 Federal Ambientes Planejados. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </form>
  );
}
