import { FaUsers, FaUserTie, FaUserAlt, FaFileInvoice } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <aside className="w-64  bg-gray-400 p-5 ">
      <ul>
        {/* cadastre e pesquisa de clientes */}
        <li className="mb-4 ">
          <Link
            to="/clientes"
            className="text-xl text-white hover:text-green-500 flex items-center"
          >
            <FaUsers className="mr-2" /> {/* Ícone à esquerda do texto */}
            Clientes
          </Link>
        </li>

        {/* cadastre e pesquisa de funcionarios */}
        <li className="mb-4 ">
          <Link
            to="/funcionarios"
            className="text-xl text-white hover:text-green-500 flex items-center"
          >
            <FaUserTie className="mr-2" /> {/* Ícone à esquerda do texto */}
            Funcionarios
          </Link>
        </li>

        {/* cadastre e pesquisa de terceiros */}
        <li className="mb-4 ">
          <Link
            to="/terceiros"
            className="text-xl text-white hover:text-green-500 flex items-center"
          >
            <FaUserAlt className="mr-2" /> {/* Ícone à esquerda do texto */}
            Terceiros
          </Link>
        </li>

        {/* cadastre e pesquisa de orçamentos */}
        <li className="mb-4 ">
          <Link
            to="/orcamentos"
            className="text-xl text-white hover:text-green-500 flex items-center"
          >
            <FaFileInvoice className="mr-2" /> {/* Ícone à esquerda do texto */}
            Orçamentos
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
