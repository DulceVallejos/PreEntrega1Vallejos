import React from 'react';
import "../App.css"
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
     <header>
         <nav className="navbar navbar-expand-sm navbar-light bg-light">
             <div className="collapse navbar-collapse" id="opciones">
                 <div className="navbar-nav">
                     <h1>M&S</h1>
                     <div className="nav-item">
                         <NavLink className="nav-link" to="/">Inicio</NavLink> 
                     </div>
                     <div className="nav-item">
                         <a className="nav-link" href="#">Productos</a>
                     </div>
                     <div className="nav-item">
                         <a className="nav-link" href="#">Nosotros</a>
                     </div>
                     <div className="nav-item">
                         <a className="nav-link" href="#">Contacto</a>
                     </div>
                     <div className="carrito">
                         <CartWidget/>
                     </div>
                 </div>
              </div>
         </nav>
     </header>
    )
}
export default NavBar;