import { MdShoppingCart } from "react-icons/md";

const NavBar = () => {
    return (
     <header>
         <nav className="navbar navbar-expand-sm navbar-light bg-light">
             <div className="collapse navbar-collapse" id="opciones">
                 <ul className="navbar-nav">
                     <h1>M&S</h1>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Inicio</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Productos</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Nosotros</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Contacto</a>
                     </li>
                     <li className="carrito">
                         <MdShoppingCart/>
                     </li>
                 </ul>
              </div>
         </nav>
     </header>
    )
}
export default NavBar;