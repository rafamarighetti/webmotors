import React from "react";
import logo from "../../assets/images/logo.svg";

import "./style.css";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header>
      <Link to="/">
        {" "}
        <img class="logo" src={logo} alt="Webmotors" />
      </Link>

      {children}
    </header>
  );
};

export default Header;
