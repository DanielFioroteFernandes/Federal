import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";
import Menu from "./components/Menu";

// Pages
import Clientes from "./pages/Clientes";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  // Verifica se a rota atual é "/login"
  const isLoginPage = location.pathname === "/";

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        {!isLoginPage && <Header />}
        <div className="flex flex-1 ">
          {!isLoginPage && <Menu />}
          <main className="flex-1 ">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/clientes" element={<Clientes />} />
            </Routes>
          </main>
        </div>
        {/* {!isLoginPage && <Footer />} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
