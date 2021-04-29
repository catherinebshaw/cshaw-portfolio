import React from "react";
import "./style.css";
import {FaLeaf} from "react-icons/fa";
import {IconContext} from "react-icons"

function Footer() {
  return (
    <footer className="footer">
      <span><IconContext.Provider value={{ color: "white", size: "2rem", margin: "50px"}}> <FaLeaf /></IconContext.Provider>     ELM Avenue Management 2003</span>
    </footer>
  );
}

export default Footer;
