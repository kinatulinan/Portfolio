import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Crafts from "./components/Crafts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigationBar />
    <Home />
    <About />
    <Crafts />
    {/* <Projects /> */}
  </StrictMode>
);
