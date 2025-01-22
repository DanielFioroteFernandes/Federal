import { useNavigate } from "react-router-dom";

import api from "../../services/api";
// logo
import { useState } from "react";
import logogrande from "../../assets/federal_logo.grande.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { data: token } = await api.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", token);
      console.log(token);

      navigate("/home");
    } catch (err) {
      alert("senha ou email incorreto");
    }
  }

  return (
    <div className="flex h-screen">
      {/* Lado esquerdo - Informações da empresa */}
      <div className="w-1/2 bg-gradient-to-r from-lime-400 via-green-500 to-teal-500 text-white flex flex-col justify-center items-center p-8">
        <img src={logogrande} alt="Login" className="object-cover" />
        <p className="mt-4 text-lg">
          A melhor empresa de móveis planejados do Brasil.
        </p>
        <p className="mt-2 text-lg">
          Oferecemos qualidade, durabilidade e design exclusivo para transformar
          sua casa.
        </p>
      </div>

      {/* Lado direito - Formulário de login */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Bem-vindo
          </h2>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Login
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Digite seu login"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Senha
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2025 Federal Ambientes Planejados. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
