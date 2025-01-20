import { FaEdit, FaTrash } from "react-icons/fa";

import React, { useState } from "react";
interface UsuariosSistema {
  nome: string;
  email: string;
  senha: string;
  perfil: string;
}

function UsuariosSistema() {
  const [usuariosSistema, setUsuariosSistema] = useState<UsuariosSistema[]>([]); // Armazenar os clientes
  const [formData, setFormData] = useState<UsuariosSistema>({
    nome: "",
    email: "",
    senha: "",
    perfil: "", // Valor padrão
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsuariosSistema([...usuariosSistema, formData]); // Adiciona o novo cliente à lista
    setFormData({ nome: "", email: "", senha: "", perfil: "" }); // Limpa o formulário
  };

  return (
    <div className="flex h-screen ">
      {/* Formulário de Cadastro */}
      <div className="w-1/2 bg-gray-100 p-8 justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center ">
          Cadastre usuários no sistema
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-lg">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full  border  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="perfil" className="block text-lg">
              Perfil
            </label>
            <select
              id="perfil"
              name="perfil"
              value={formData.perfil}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            >
              <option value="Teste2">Selecione uma opção</option>
              <option value="Basico">Básico</option>
              <option value="Adm">Administrador</option>
            </select>
          </div>

          <div>
            <label htmlFor="cpf" className="block text-lg">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
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
          {usuariosSistema.length === 0 ? (
            <p>Não há usuários cadastrados.</p>
          ) : (
            usuariosSistema.map((usuario, index) => (
              <div key={index} className="p-4 bg-white rounded-md shadow-md  ">
                <div className="flex justify-between items-center">
                  {/* Detalhes do Cliente */}

                  <div>
                    <p>
                      <strong>Nome:</strong> {usuario.nome}
                    </p>
                    <p>
                      <strong>Email:</strong> {usuario.email}
                    </p>
                    <p>
                      <strong>Senha:</strong> {usuario.senha}
                    </p>
                    <p>
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
