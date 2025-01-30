import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <StrictMode>
    <App />
  </StrictMode>
  // </ThemeProvider>
);
