import { Link, NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

import CartWidget from "./CarWidget/CartWidget"

import './Navbar.css'


const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link className="name-shop" to='/'><img className="logo" src="/logo.svg" alt="logo" /><strong className="allegro">Allegro </strong></Link>
          <Nav className="me-auto categories">
            <NavLink className="element-cat" to='/category/guitarra'>Guitars</NavLink>
            <NavLink className="element-cat" to='/category/percusion'>Percussion</NavLink>
            <NavLink className="element-cat" to='/category/vientos'>Wind instruments</NavLink>
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