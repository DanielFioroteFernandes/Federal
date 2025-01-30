import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import Users from "./pages/Users";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "./components/Theme/theme-provider";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de login sem layout */}
        <Route path="/login" element={<Login />} />

        {/* Rotas com layout */}
        <Route
          path="/*"
          element={
            <ThemeProvider defaultTheme="dark">
              <SidebarProvider>
                <AppSidebar />
                <Routes>
                  <Route path="/users" element={<Users />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </SidebarProvider>
            </ThemeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
