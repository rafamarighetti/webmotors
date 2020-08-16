import React from "react";

import "./styles.css";

function List({ data, setShowVehicles }) {
  return (
    <>
      {data.map((car) => {
        return (
          <>
            <div className="box-car">
              <div className="left">
                <img className="image-car" src={car.Image} alt="" />
              </div>
              <div className="right">
                <h1>
                  {car.Make} - <strong>{car.Model}</strong>
                </h1>
                <h2>{car.Version}</h2>
                <div className="info">
                  <span className="ano">
                    <strong>Ano: </strong>
                    {car.YearFab}/{car.YearModel}
                  </span>
                  <span className="km">
                    <strong>KM: </strong>
                    {car.KM}
                  </span>
                  <span className="cor">
                    <strong>Cor: </strong>
                    {car.Color}
                  </span>
                  <span className="price">
                    <strong>R$ </strong>
                    {car.Price}
                  </span>
                </div>
              </div>
            </div>
            <div className="line"></div>
          </>
        );
      })}

      <span className="voltar">
        <a onClick={() => setShowVehicles(false)}>Voltar</a>
      </span>
    </>
  );
}

export default List;
