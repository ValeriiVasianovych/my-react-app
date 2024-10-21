import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Travel Trip Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <NavDropdown title="Countries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Norway</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Poland</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ireland</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Netherlands</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;