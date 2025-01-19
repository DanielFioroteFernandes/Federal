import { FaSignOutAlt } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 ">
      {/* Logotipo */}
      <div className="flex flex-col items-center justify-center p-1">
        {/* Nome "Federal" na parte superior */}
        <h1 className="text-5xl font-extrabold text-green-500 tracking-wider drop-shadow-2xl">
          Federal
        </h1>
        {/* Nome "Ambientes Planejados" na parte inferior */}
        <p className="text-xs text-gray-100 mt-0 tracking-wide">
          Ambientes Planejados
        </p>
      </div>

      <button className="flex items-center text-lg hover:text-green-500">
        <FaSignOutAlt className="mr-2" /> {/* Ícone de sair */}
        Sair
      </button>
    </header>
  );
}

export default Header;
