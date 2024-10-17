import { useEffect, useState } from 'react';


function App() {

const [ipData, setIpData] = useState(null);

useEffect(() => {
fetch("https://api.techniknews.net/ipgeo/192.129.244.55")
.then((res) => res.json())
.then((data) => {
  console.log(data)
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
