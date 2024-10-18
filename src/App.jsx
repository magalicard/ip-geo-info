import { useEffect, useState } from 'react';


function App() {

const [ipData, setIpData] = useState(null);
const API_URL = import.meta.env.VITE_API_URL

useEffect(() => {
fetch(`${API_URL}192.129.244.55`) 
.then((res) => res.json())
.then((data) => {
  setIpData(data) 
})
.catch(() => {
  console.error("La peticion fallo")
})

}, [])

return(
  <div>
  <h1>Datos de la IP:</h1>
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
 
)
}


export default App
