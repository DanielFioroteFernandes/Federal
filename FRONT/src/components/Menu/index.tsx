import {
  FaUsers,
  FaUserTie,
  FaUserAlt,
  FaFileInvoice,
  FaHome,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <aside className="w-64  bg-gray-500 p-5 border-r-2 border-gray-400">
      <ul>
        {/* pagina home */}
        <li className="mb-4 ">
          <Link
            to="/home"
            className="text-xl text-white hover:text-green-500 flex items-center"
          >
            <FaHome className="mr-2" /> {/* Ícone à esquerda do texto */}
            Home
          </Link>
        </li>
        <hr className="border-gray-400 my-4" /> {/* Linha divisória */}
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
        <hr className="border-gray-400 my-4" /> {/* Linha divisória */}
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
        {/* cadastro de usuarios no sistema*/}
        <li className="mb-4 ">
          <Link
            to="/usuariosSistema"
            className="text-xl text-white hover:text-green-500 flex items-center"
          >
            <FaUserPlus className="mr-2" /> {/* Ícone à esquerda do texto */}
            Usuários
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
