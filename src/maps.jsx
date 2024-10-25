
import React, { useRef, useEffect } from 'react';
import "mapkick/bundle";

const Maps = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && latitude && longitude) {
      new Mapkick.Map(mapRef.current, [
        { latitude, longitude }
      ]);
    }
  }, [latitude, longitude]); // El efecto se ejecutará cuando cambien las coordenadas

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

export default Maps;