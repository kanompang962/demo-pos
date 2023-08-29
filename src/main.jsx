import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme.js";
import { CartProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </CartProvider>
  </React.StrictMode>
);
