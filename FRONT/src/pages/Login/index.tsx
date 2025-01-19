function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      <form className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">
          Login
        </button>
      </form>

      <h1 className="bg-rose-500 p-10 hover:bg-lime-500">Testeando Tailwind</h1>
    </div>
  );
}
export default Login;
