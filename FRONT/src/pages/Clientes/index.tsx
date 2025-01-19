import { FaEdit, FaTrash } from "react-icons/fa";

import React, { useState } from "react";
interface Cliente {
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
}
function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]); // Armazenar os clientes
  const [formData, setFormData] = useState<Cliente>({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClientes([...clientes, formData]); // Adiciona o novo cliente à lista
    setFormData({ nome: "", endereco: "", telefone: "", email: "" }); // Limpa o formulário
  };

  return (
    <div className="flex h-screen ">
      {/* Formulário de Cadastro */}
      <div className="w-1/2 bg-gray-100 p-8 justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center ">
          Cadastro de Cliente
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
              className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label htmlFor="endereco" className="block text-lg">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-lg">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
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
              className="w-full  border  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
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
          <h2 className="text-2xl font-bold">Lista de Clientes</h2>

          {/* Campo de pesquisa e botão alinhados à direita */}
          <div className="flex items-center space-x-4 ml-auto">
            <input
              type="text"
              placeholder="Pesquisar Cliente"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300">
              Pesquisar
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {clientes.length === 0 ? (
            <p>Não há clientes cadastrados.</p>
          ) : (
            clientes.map((cliente, index) => (
              <div key={index} className="p-4 bg-white rounded-md shadow-md">
                <h3 className="text-xl font-semibold">{cliente.nome}</h3>
                <p>
                  <strong>Endereço:</strong> {cliente.endereco}
                </p>
                <p>
                  <strong>Telefone:</strong> {cliente.telefone}
                </p>
                <p>
                  <strong>Email:</strong> {cliente.email}
                </p>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Clientes;
