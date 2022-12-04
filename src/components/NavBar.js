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
                     <NavLink className="nav-link" to="/category/Floral">Floral</NavLink>
                     </div>
                     <div className="nav-item">
                     <NavLink className="nav-link" to="/category/Frutal">Frutal</NavLink>
                     </div>
                     <div className="nav-item">
                     <NavLink className="nav-link" to="/category/Fresco">Fresco</NavLink>
                     </div>
                     <div className="nav-item">
                     <NavLink className="nav-link" to="/category/Dulce">Dulce</NavLink>
                     </div>
                     <div className="nav-item">
                     <NavLink className="nav-link" to="/category/Citrico">Citrico</NavLink>
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