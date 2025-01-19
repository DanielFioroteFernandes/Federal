// components
import Logo from "../../components/Logo";

function Login() {
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo - Informações da empresa */}
      <div className="w-1/2 bg-gradient-to-r from-lime-400 via-green-500 to-teal-500 text-white flex flex-col justify-center items-center p-8">
        <Logo />
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
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Login
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Digite seu login"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Entrar
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2025 Federal Móveis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
