import React from "react";
import '../styles/speedtest.css';
import { Link } from 'react-router-dom';

export default function SpeedTestComponent() {
  return (
    <div className="container">
       <h1>Test de velocidad</h1>
       <Link to="/speedtestInfo" style={{color: '#6730ec' , textDecoration: 'underline'}}>
          ¿Como funciona el test de velocidad?</Link>
      <div className="frame-container">
       
        <iframe
          className="iframe"
          src="//openspeedtest.com/speedtest"
          title="Speed Test"
        ></iframe>
      </div>
      Provided by <a href="https://openspeedtest.com" className="provider-link">OpenSpeedtest.com</a>
    </div>
  );
}