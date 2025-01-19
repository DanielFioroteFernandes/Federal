function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logotipo */}
        <div className="flex flex-col items-center justify-center p-1">
          {/* Nome "Federal" na parte superior */}
          <h1 className="text-5xl font-extrabold text-green-500 tracking-wider drop-shadow-2xl">
            Federal
          </h1>
          {/* Nome "Ambientes Planejados" na parte inferior */}
          <p className="text-xs text-gray-100 mt-0 tracking-wide ">
            Ambientes Planejados
          </p>
        </div>

        {/* Informações do criador e data */}
        <div className="text-sm mt-2 md:mt-0">
          <p>
            Desenvolvido por{" "}
            <span className="font-semibold">Daniel Fiorote</span>
          </p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
