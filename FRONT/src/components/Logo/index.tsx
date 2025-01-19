function Logo() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-green-800 via-green-500 to-green-800 rounded-lg shadow-2xl">
      {/* Nome "Federal" na parte superior */}
      <h1 className="text-6xl font-extrabold text-slate-950 tracking-wider drop-shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
        Federal
      </h1>
      {/* Nome "Ambientes Planejados" na parte inferior */}
      <p className="text-2xl text-gray-100 mt-4 tracking-wide drop-shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        Ambientes Planejados
      </p>
    </div>
  );
}

export default Logo;
