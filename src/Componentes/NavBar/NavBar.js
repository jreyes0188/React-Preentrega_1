import React from "react";
import "./NavBar.css";
import CartShop from "../CartShop/Shop";

const NavBar = () => {
    return (
        <nav className="Barra_Navegacion">
            <ul className="List-ul">
                <li>
                    <a href="www.google.com">Inicio</a>
                </li>
                <li>
                    <a href="www.google.com">Catálogos</a>
                </li>
                <li>
                    <a href="www.google.com">Galería</a>
                </li>
                <li>
                    <a href="www.google.com">Contacto</a>
                </li>
                <li className="Cart_Shop">
                    <CartShop/>
                    <span>0</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;