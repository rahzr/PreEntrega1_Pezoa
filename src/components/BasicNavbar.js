import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { SparklesIcon as SparklesIconOutlineIcon } from '@heroicons/react/24/outline';

function BasicNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <SparklesIconOutlineIcon className="me-2 w-100" style={{ maxWidth: '22px', maxHeight: '22px' }} />
          <span className="fw-bold">Tiendita provisoria</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Info despacho</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Categoria especial
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;