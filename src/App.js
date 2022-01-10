import React, {useState} from "react";
import Topbar from "./components/topbar";
import Intro from "./pages/intro";
import About from "./pages/about";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import "./app.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
