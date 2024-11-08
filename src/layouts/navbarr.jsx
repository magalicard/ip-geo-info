import React from 'react';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './navbar.css';
import SearchForm from '../components/SearchForm';

export const Navbarr = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/infoip">
              Info IP
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/inputip">
              Input IP
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/speedtest">
              Speed Test
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/speedtestInfo">
              Speed Test Info
            </Link>
          </li>
        </ul>
        <ul>
            <li className="nav-item">
            <SearchForm/>
          </li>
        </ul>
      
        
      </div>
    </nav>
  );

    }
    
export default Navbarr;