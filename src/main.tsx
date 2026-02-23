import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force dark cybersecurity theme by default
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);
