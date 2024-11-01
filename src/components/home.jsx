import React, { useState, useEffect } from 'react';
import Maps from './maps';
import { Link } from 'react-router-dom';
import computer1 from "../assets/computer1.png"
import phone from "../assets/phone.png";
import '../styles/home.css';

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
      <h2>⚠️¿Tu información está en peligro?⚠️</h2>
      <Link to="/infoip" style={{color: '#6730ec' , textDecoration: 'underline'}} >
      Haz click aqui para ver información sobre tu IP
      </Link>
      <div className='contenedor-imagen'>
      <img 
                    src={data.mobile ? phone : computer1} 
                    alt={data.mobile ? "Imagen de teléfono" : "Imagen de computadora"} 
                    style={{ width: '50%' }} 
                    className='imagen-pequena' 
                />
      </div>
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