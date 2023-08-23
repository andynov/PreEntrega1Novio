import { Navbar, Container, Nav } from "react-bootstrap"
import CartWidget from "./CarWidget/CartWidget"

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav.Link href="#deets">
              0<CartWidget />
            </Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar