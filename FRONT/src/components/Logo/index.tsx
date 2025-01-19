function Logo() {
  return (
    <div className="flex items-center space-x-4">
      {/* Caixa geométrica */}
      <div className="relative w-16 h-16">
        {/* Parte cinza */}
        <div
          className="absolute w-full h-full bg-gradient-to-tr from-gray-500 to-gray-700"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 50% 50%, 100% 100%, 0% 100%, 50% 50%)",
          }}
        />
        {/* Parte verde */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-lime-400 to-green-500"
          style={{
            clipPath:
              "polygon(50% 50%, 100% 0%, 100% 100%, 50% 50%, 0% 100%, 0% 0%)",
          }}
        />
      </div>

      {/* Texto da logo */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Federal</h1>
        <span className="bg-green-500 text-white px-2 py-1 text-lg rounded">
          Ambientes Planejados
        </span>
      </div>
    </div>
  );
}

export default Logo;
