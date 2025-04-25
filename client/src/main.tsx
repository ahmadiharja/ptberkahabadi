import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply Apple-like typography and styling
const style = document.createElement('style');
style.textContent = `
  :root {
    --accent-blue: #2997ff;
    --accent-green: #4cd964;
    --dark-900: #121212;
    --dark-800: #1d1d1f;
    --dark-700: #333333;
    --dark-600: #494949;
    --dark-500: #86868b;
    --dark-400: #a1a1a6;
    --dark-300: #d2d2d7;
    --light-100: #f5f5f7;
    --light-200: #e8e8ed;
  }
  
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--dark-900);
    color: var(--light-100);
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
