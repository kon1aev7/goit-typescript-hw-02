import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'modern-normalize';
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App/>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
