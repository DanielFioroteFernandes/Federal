import { FaEdit, FaTrash } from "react-icons/fa";

import { useState, useEffect } from "react";

import api from "../../services/api";

function UsuariosSistema() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");

  const [users, setUsers] = useState<Users[]>([]);

  interface Users {
    id?: string;
    name: string;
    email: string;
    perfil: string;
    password: string;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/cadastro", {
        name,
        email,
        password,
        perfil,
      });
      alert("Usuário Cadastrado");

      // Limpar os campos do formulário
      setName("");
      setEmail("");
      setPassword("");
      setPerfil("");
    } catch (err) {
      alert("Erro ao cadastrar o usuário");
    }
  }

  async function getUsers() {
    try {
      const response = await api.get("/listar");
      setUsers(response.data.users);
    } catch (err) {
      alert("Erro ao buscar usuários.");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex h-screen ">
      {/* Formulário de Cadastro */}
      <div className="w-1/2 bg-gray-100 p-8 justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center ">
          Cadastre usuários no sistema
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg">
              Nome
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full  border  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="perfil" className="block text-lg">
              Perfil
            </label>
            <select
              onChange={(e) => setPerfil(e.target.value)}
              id="perfil"
              name="perfil"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="basico">Básico</option>
              <option value="adm">Administrador</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-lg">
              Senha
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-300"
          >
            Cadastrar
          </button>
        </form>
      </div>

      {/* Exibição dos Usuários Cadastrados */}

      {/* Exibição dos Usuários Cadastrados */}

      <div className="w-1/2 bg-gray-200 p-8 overflow-y-auto ">
        <div className="flex items-center justify-between mb-6">
          {/* Título */}
          <h2 className="text-2xl font-bold">Lista de Usuários</h2>

          {/* Campo de pesquisa e botão alinhados à direita */}
          <div className="flex items-center space-x-4 ml-auto">
            <input
              type="text"
              placeholder="Pesquisar Usuário"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300">
              Pesquisar
            </button>
          </div>
        </div>
        <div className=" space-y-4 ">
          {users.length === 0 ? (
            <p>Não há usuários cadastrados.</p>
          ) : (
            users.map((usuario) => (
              <div
                key={usuario.id}
                className="p-4 bg-white rounded-md shadow-md  "
              >
                <div className="flex justify-between items-center">
                  {/* Detalhes do Cliente */}

                  <div className="w-3/4">
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                      <strong>Nome:</strong> {usuario.name}
                    </p>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                      <strong>Email:</strong> {usuario.email}
                    </p>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                      <strong>Senha:</strong> {usuario.password}
                    </p>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                      <strong>Perfil:</strong> {usuario.perfil}
                    </p>
                  </div>
                  {/* Ícones de Editar e Excluir */}
                  <div className="flex space-x-8 p-2">
                    <button className="text-green-500 hover:text-green-300">
                      <FaEdit size={28} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash size={25} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UsuariosSistema;
