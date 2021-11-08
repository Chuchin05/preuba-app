import React from "react"
import CartWidget from "./CartWidget"
import { Navbar,Container,Nav } from "react-bootstrap"

const NavBar =()=>{
    return (
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Inicio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Tienda</Nav.Link>
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      <CartWidget/>
    </Nav>
    </Container>
  </Navbar>
    )
}
export default NavBar