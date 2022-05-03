import { StrictMode } from "react"; //imr -> so that we can can we babel
import {createRoot} from "react-dom/client"; //imrd
import App from "./App";
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);