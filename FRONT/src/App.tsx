import { GroupAddOutlined, PersonAdd } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";
import UsuariosSistema from "./pages/UsuariosSistema";
import Home from "./pages/Home";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Sistema Federal",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "clientes",
    title: "Clientes",
    icon: <PersonAdd />,
  },
  {
    segment: "usuarios",
    title: "Usuários",
    icon: <ShoppingCartIcon />,
  },

  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Controle de acesso",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "usuarios",
    title: "Usuarios",
    icon: <GroupAddOutlined />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function FederalPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Toaster />

      {pathname === "/dashboard" && <Home />}
      {pathname === "/clientes" && <Clientes />}

      {pathname === "/usuarios" && <UsuariosSistema />}
      {/* <Typography> Meu teste {pathname}</Typography> */}
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export function DashboardLayoutFederal(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <FederalPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

// Layout do login
function LoginLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Toaster />;
      <Login />
    </Box>
  );
}

// Configuração principal do roteador
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para login - sem o layout principal */}
        <Route path="/" element={<LoginLayout />} />

        {/* Rota com o layout principal */}
        <Route path="/*" element={<DashboardLayoutFederal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
