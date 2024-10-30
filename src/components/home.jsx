import React, { useState, useEffect } from 'react';
import Maps from './maps';


export const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(API_URL)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } 

    return(
     <div>
      <h1>Tu IP es: </h1>
      <h2 className='colorPurple'>{data.ip}</h2>
      <p>¿Como funcionan las IP?</p>{/* añadir el link para que lleve a la pagina de la info */}

      <h2>Datos obtenidos de tu IP: </h2>
      <p><strong>Pais: </strong>{data.country}</p>
      <p><strong>Region: </strong>{data.regionName}</p>
      <p><strong>Ciudad:</strong> {data.city}</p>
      <p><strong>Moneda que utilizas: </strong>{data.currency}</p>
      <p>
        {data.mobile 
          ? "Estás conectado desde tu celular." 
          : "Estás conectado desde tu computadora."}
      </p>
      <h2>Ubicación aproximada: </h2>
      
      <Maps latitude={data.lat} longitude={data.lon}/>
      
    </div>
    )
}
export default Home;