import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("home")}
        className={active === "home" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}
      >
        <LuUserRound />
      </a>
      <a
        href="#skills"
        onClick={() => setActive("skills")}
        className={active === "skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={active === "services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("projects")}
        className={active === "projects" ? "active" : ""}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
