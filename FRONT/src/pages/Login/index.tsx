import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import api from "../../services/api";
import logogrande from "../../assets/federal_logo.grande.png";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data: token } = await api.post("/login", { email, password });
      localStorage.setItem("token", token);
      navigate("../home");
    } catch (err) {
      toast.error("Senha ou email incorreto.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      height="100vh"
    >
      {/* Lado esquerdo - Logo ocupando todo o espaço disponível */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={1}
        bgcolor="#f7f7f7"
      >
        <img
          src={logogrande}
          alt="Logo da empresa"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "20px",
          }}
        />
      </Box>

      {/* Lado direito - Formulário de login */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex={1}
        p={4}
      >
        <Box
          sx={{
            maxWidth: 400,
            width: "100%",
            backgroundColor: "white",
            boxShadow: 2,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            color="gray.800"
            mb={4}
          >
            Bem-vindo
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Login"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu login"
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                type="password"
                label="Senha"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </Box>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                Entrar
              </Button>
            </Box>
          </form>
          <Typography
            variant="caption"
            display="block"
            textAlign="center"
            mt={3}
            color="gray.500"
          >
            &copy;2025 Federal Ambientes Planejados. Todos os direitos
            reservados.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
