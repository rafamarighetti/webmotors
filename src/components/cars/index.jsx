import React, { useEffect, useState } from "react";
import { PinIcon } from "../../assets/icons/pin.icon";
import api from "../../api";

import "./style.css";

import List from "../../components/list";

function Cars() {
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const [version, setVersion] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [makeID, setMakeID] = useState(null);
  const [modelID, setModelID] = useState(null);
  const [versionName, setVersionName] = useState(null);
  const [showVehicles, setShowVehicles] = useState(null);

  const raio = ["100km", "50km", "30km", "10km", "5km"];
  const ano = [2020, 2019, 2018, 2017, 2016, 2015];
  const preco = ["> 50k", "> 30k", "> 10k", "< 10k"];

  const effectMake = () => {
    fetch(`${api}/Make`)
      .then((res) => res.json())
      .then((data) => {
        setMake(data);
      })
      .catch(console.log);
  };
  useEffect(effectMake, []);

  const effectModel = () => {
    fetch(`${api}/Model?MakeID=${makeID || 1}`)
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
      })
      .catch(console.log);
  };
  useEffect(effectModel, [makeID]);

  const effectVersion = () => {
    fetch(`${api}/Version?ModelID=${modelID || 1}`)
      .then((res) => res.json())
      .then((data) => {
        setVersion(data);
      })
      .catch(console.log);
  };
  useEffect(effectVersion, [modelID]);

  const effectVehicles = () => {
    fetch(`${api}/Vehicles?Page=${1}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
      })
      .catch(console.log);
  };
  useEffect(effectVehicles, [versionName]);

  const selectMarca = (id) => {
    setMakeID(id);
  };

  const selectModel = (id) => {
    setModelID(id);
  };

  const selectVersion = (name) => {
    setVersionName(name);
  };

  const selectVehicles = () => {
    setShowVehicles(true);
  };

  console.log(vehicles);

  return !showVehicles ? (
    <form action="">
      <div className="select-condition">
        <label for="scales">
          <input type="checkbox" id="novos" name="novos" />
          <span>Novos</span>
        </label>
        <label for="scales">
          <input type="checkbox" id="usados" name="usados" />
          <span>Usados</span>
        </label>
      </div>

      <div className="inputs-container">
        <div className="input-local">
          <PinIcon color="#de032b" />
          <span className="placeholder-icon">Onde:</span>
          <input type="text" />
          <span className="placeholder">Raio:</span>
          <select name="marcas" id="local">
            {raio.map((raio) => {
              return <option value={raio}>{raio}</option>;
            })}
          </select>
        </div>

        <div className="input-marca">
          <span className="placeholder">Marca:</span>
          <select
            name="marcas"
            id="marcas"
            onChange={(e) => selectMarca(e.target.value)}
          >
            <option value={[]} selected>
              Todas
            </option>
            {make.map((make) => {
              return (
                <option key={make.ID} value={make.ID}>
                  {make.Name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="input-modelo">
          <span className="placeholder">Modelo:</span>
          <select
            disabled={!makeID}
            name="modelos"
            id="modelos"
            onChange={(e) => selectModel(e.target.value)}
          >
            <option value={[]}>Todos</option>
            {model.length > 0 &&
              model.map((model) => {
                return (
                  <option key={model.ID} value={model.ID}>
                    {model.Name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="inputs-container">
        <div className="input-ano">
          <span className="placeholder">Ano Desejado:</span>
          <select name="ano" id="ano">
            <option value="">Todos</option>
            {ano.map((ano) => {
              return <option value={ano}>{ano}</option>;
            })}
          </select>
        </div>

        <div className="input-preco">
          <span className="placeholder">Faixa de Preço:</span>
          <select name="cars" id="cars">
            <option value="">Total</option>
            {preco.map((preco) => {
              return <option value={preco}>{preco}</option>;
            })}
          </select>
        </div>

        <div className="input-versao">
          <span className="placeholder">Versão:</span>
          <select
            disabled={!modelID}
            name="cars"
            id="cars"
            onChange={(e) => selectVersion(e.target.value)}
          >
            <option value={[]}>Todos</option>
            {version.length > 0 &&
              version.map((version) => {
                return (
                  <option key={version.ID} value={version.Name}>
                    {version.Name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      <div className="inputs-container">
        <div className="input-busca">
          <p onClick={() => alert("Opção de Busca em Manutenção")}>
            Busca Avançada
          </p>
        </div>
        <div className="input-filtros">
          <p onClick={() => alert("Opção de Filtros em Manutenção")}>
            Limpar filtros
          </p>
          <button onClick={() => selectVehicles()}>Ver ofertas</button>
        </div>
      </div>
    </form>
  ) : (
    <List data={vehicles} setShowVehicles={setShowVehicles} />
  );
}

export default Cars;
