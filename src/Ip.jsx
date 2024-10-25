import { useEffect, useState } from 'react';


const Ip = ({ ipData }) => {
  return (
    <div>
      {ipData ? (
        <div>
          <p>Ciudad: {ipData.city}</p>
          <p>País: {ipData.country}</p>
          <p>Región: {ipData.regionName}</p>
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