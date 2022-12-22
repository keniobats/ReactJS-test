import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartWidget } from './CartWidget';

export function NavbarMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MercadoCursos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Cursos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ciberseguridad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Programación
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diseño Gráfico</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Networking
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar cursos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

