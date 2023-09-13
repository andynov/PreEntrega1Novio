import { Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CarWidget/CartWidget"

import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img className="logo" src="/logo.png" alt="logo" /><strong>Allegro </strong><i>Tienda de Instrumentos Musicales</i></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#guitarras">Guitarras</Nav.Link>
            <Nav.Link href="#percusion">Percusión</Nav.Link>
            <Nav.Link href="#pricing">Instrumentos de viento</Nav.Link>
          </Nav>
          <Nav.Link href="#deets">
            <CartWidget />
          </Nav.Link>
          <strong>0</strong>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar