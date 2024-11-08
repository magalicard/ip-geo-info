import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
    
  const keywordToRouteMap = {
    "ip": "/",
    "info": "/infoip",
    "informacion": "/infoip",
    "informacion de mi ip" : "/infoip",
    "información de mi ip": "/infoip",
    "mi ip": "/infoip",
    "cual es mi ip": "/",
    "cuál es mi ip": "/",
    "buscar ip": "/inputIp",
    "una ip": "/inputIp",
    "test de velocidad": "/speedtest",
    "informacion de test de velocidad": "/speedtestInfo",
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const route = keywordToRouteMap[searchTerm];
    if (route) {
      navigate(route);
    } else {
      alert("No se encontró ninguna página para el término ingresado");
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}
