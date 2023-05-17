import React from "react";  
import { Link } from "react-router-dom";
import logo from "../../Imagenes/logo.jpeg"

const Navbar=()=>{
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link to='/'>
      <img alt="logo" src={logo} width='70'></img>
    </Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto" >
        <li className="nav-item">
          <Link className="nav-link active" style={{color: 'white'}}  aria-current="page" to= '/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"style={{color: 'white'}}  to= '/conocenos'>Conocenos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: 'white'}} to= '/servicio'>Servicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: 'white'}} to='/unete'>Unete</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );  
}

export default Navbar