import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Experience from "./components/Experience";
import "./App.css";

const navBar = [
  { id: 1, title: "About" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Project" },
  { id: 4, title: "Contact" },
];

const App = () => {
  return (
    <>
      <nav>
        {navBar.map((navItem) => (
          <li key={navItem.id} to>
            <Link to={navItem.id === 1 ? "/" : `/${navItem.title}`}>
              {navItem.title}
            </Link>
          </li>
        ))}
        <ul></ul>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
