import { FaSignOutAlt } from "react-icons/fa";

import logopequena from "../../assets/federal_logo.pequena.png";
function Header() {
  return (
    <header className="bg-gray-500 text-white flex items-center justify-between px-6 py-4 border-b-2 border-gray-400 ">
      {/* Logotipo */}
      <div className="flex flex-col items-center justify-center p-1">
        <img src={logopequena} className="w-[230px] h-auto" />
      </div>

      <button className="flex items-center text-lg hover:text-green-500">
        <FaSignOutAlt className="mr-2" /> {/* Ícone de sair */}
        Sair
      </button>
    </header>
  );
}

export default Header;
