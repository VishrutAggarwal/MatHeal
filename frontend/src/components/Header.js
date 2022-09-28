import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div id='header' className='fixed-top'>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MatHeal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#authentication">Login</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            {/* <Nav.Link to="/communitylogin">Community Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header