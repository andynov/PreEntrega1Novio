import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import CartWidget from "./CarWidget/CartWidget";

import './Navbar.css'


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <>
        <nav>
          <Link className="name-shop" to='/'>
            <img className="logo" src="/logo.svg" alt="logo" /><strong className="allegro">Allegro </strong>
          </Link>
          <ul className={menuOpen ? "open" : ""}>
            <NavLink className="categories" to='/category/guitarra'><li>Guitars</li></NavLink>
            <NavLink className="categories" to='/category/percusion'><li>Percussion</li></NavLink>
            <NavLink className="categories" to='/category/vientos'><li>Wind instruments</li></NavLink>
            </ul>
          <Link className="cart-widget" to='/cart'>
            <CartWidget />
          </Link>
          <div className="burger-menu" onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
    </>
  )
}

export default NavBar