
import React, { useRef, useEffect } from 'react';
import "mapkick/bundle";
import '../styles/maps.css'
const Maps = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && latitude && longitude) {
      new Mapkick.Map(mapRef.current, [
        { latitude, longitude }
      ]);
    }
  }, [latitude, longitude]); 

  return (
    <div className="map-container">
    <div ref={mapRef} style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}></div>
  </div>
  )
};

export default Maps;