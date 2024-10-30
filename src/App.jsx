import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbarr } from './layouts/navbarr';
import Home from './components/Home';
import InputIp from './components/inputIp';
import SpeedTest from './components/speedTest';
import WhatIsMyIp from './components/whatIsMyIp';
import InfoIp from './components/infoIp';
import './styles/app.css';

const App = () => {
    return (
      <>
       
        <Router>
          <Navbarr/>
          <div className="main-container">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/infoip" element={<InfoIp />} />
              <Route path="/inputIp" element={<InputIp />} />
              <Route path="/speedtest" element={<SpeedTest />} />
              <Route path="/whatismyip" element={<WhatIsMyIp />} />
            </Routes>
          </div>
          </div>
        </Router>
        
      </>
    );
  };

export default App;