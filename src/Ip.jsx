import React from "react";

const Ip = ({ ipData }) => {
  return (
    <div>
      {ipData ? (
        <div>
          <p>Ciudad: {ipData.city}</p>
          <p>País: {ipData.country}</p>
          <p>Región: {ipData.regionName}</p>
          <p>
          {ipData.mobile 
          ? "Estás conectado desde tu celular." 
          : "Estás conectado desde tu computadora."}
          </p>
          <p>Latitud: {ipData.lat}</p>
          <p>Longitud: {ipData.lon}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};


export default Ip;