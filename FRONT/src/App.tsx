import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

// Pagess
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  // Verifica se a rota atual é "/login"
  const isLoginPage = location.pathname === "/";

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        {!isLoginPage && <Header />}
        <div className="flex flex-1">
          {!isLoginPage && <Menu />}
          <main className="flex-1 bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </main>
        </div>
        {!isLoginPage && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
