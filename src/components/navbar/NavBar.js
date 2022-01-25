import { Container, Navbar, Nav } from "react-bootstrap";
import CartIcon from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <CartIcon />
      </Container>
    </Navbar>
  );
};

export default NavBar;
