import React from 'react';
import "mapkick/bundle";
import { useRef, useEffect } from 'react';

const Maps = () => {
    const mapRef = useRef(null); // Referencia para el contenedor del mapa

    useEffect(() => {
        if (mapRef.current) {
            new Mapkick.Map(mapRef.current, [
                { latitude: 45.5152, longitude: -122.678 }
            ]);
        }
    }, []);

    return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

   
  
  export default Maps;
