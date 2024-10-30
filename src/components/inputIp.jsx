import React, {useState} from "react";
import Ip from '../Ip';
import Maps from './maps';

export const InputIp = () => {
  const [ip, setIp] = useState(""); 
  const [ipData, setIpData] = useState(null); 
  const API_URL = import.meta.env.VITE_API_URL;

    const fetchIpData = () => {
        fetch(`${API_URL}${ip}`)
          .then((res) => res.json())
          .then((data) => {
            setIpData(data);
          })
          .catch(() => {
            console.error("La petición falló");
          });
      };
    return(
        <div>
        <h1>Ingrese una dirección IP</h1>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)} // Actualiza el estado de IP
          placeholder={ip}
        />
        <button onClick={fetchIpData}>Buscar</button> {/* Llama a fetchIpData al hacer clic */}
        
        <h2>Datos de la IP:</h2>
        <Ip ipData={ipData} /> 
        {ipData && <Maps latitude={ipData.lat} longitude={ipData.lon} />} 
        
      </div>
    )
}
export default InputIp;