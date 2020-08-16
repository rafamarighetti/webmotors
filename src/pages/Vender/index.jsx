import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Header from "../../components/header";

function Vender() {
  return (
    <Header id="header-vender">
      <div className="container vender">
        <p>Página indisponível no momento.</p>
      </div>
      <span className="voltar">
        <Link to="/">Voltar</Link>
      </span>
    </Header>
  );
}

export default Vender;
