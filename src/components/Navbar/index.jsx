import { Link, NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CarWidget/CartWidget"

import './Navbar.css'


const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link className="nombre-shop" to='/'><img className="logo" src="/logo.png" alt="logo" /><strong className="allegro">Allegro </strong><i className="tienda">Tienda de Instrumentos Musicales</i></Link>
          <Nav className="me-auto categorias">
            <NavLink className="elemento-cat" to='/category/guitarra'>Guitarras</NavLink>
            <NavLink className="elemento-cat" to='/category/percusion'>Percusión</NavLink>
            <NavLink className="elemento-cat" to='/category/vientos'>Instrumentos de viento</NavLink>
          </Nav>
          <Link className="cart-widget" to='/cart'>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar