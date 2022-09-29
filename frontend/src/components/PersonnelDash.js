import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PersonnelDash() {
  return (
    <div>
        <div>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MatHeal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </div>
  )
}

export default PersonnelDash