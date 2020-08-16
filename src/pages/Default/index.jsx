import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";

import Cars from "../../components/cars";
import Motos from "../../components/motos";

import { CarIcon } from "../../assets/icons/car.icon";
import { MotoIcon } from "../../assets/icons/moto.icon";

import "./styles.css";

function Default() {
  const [selected, setSelected] = useState("cars");
  const selectButton = (value) => {
    setSelected(value);
  };
  return (
    <Header>
      <div class="header-buttons">
        <nav>
          <button
            onClick={() => selectButton("cars")}
            className={selected === "cars" && "active"}
          >
            <CarIcon />
            <p>
              <span>Comprar</span>
              Carros
            </p>
          </button>
          <button
            onClick={() => selectButton("motos")}
            className={selected === "motos" && "active"}
          >
            <MotoIcon />
            <p>
              <span>Comprar</span>
              Motos
            </p>
          </button>
        </nav>
        <aside>
          <Link to="/vender">
            <button>Vender meu carro</button>
          </Link>
        </aside>
      </div>
      <div class="container">{selected !== "motos" ? <Cars /> : <Motos />}</div>
    </Header>
  );
}

export default Default;
