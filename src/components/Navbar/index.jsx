import { Link, NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CarWidget/CartWidget"

import './Navbar.css'


const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to='/'><img className="logo" src="/logo.png" alt="logo" /><strong>Allegro </strong><i>Tienda de Instrumentos Musicales</i></Link>
          <Nav className="me-auto">
            <NavLink to='/category/guitarra'>Guitarras</NavLink>
            <NavLink to='/category/percusion'>Percusión</NavLink>
            <NavLink to='/category/vientos'>Instrumentos de viento</NavLink>
          </Nav>
          <Link to='/cart'>
            <CartWidget />
          </Link>
          <strong>0</strong>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar