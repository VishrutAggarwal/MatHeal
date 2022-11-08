import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div id='header' className='fixed-top'>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MatHeal</Navbar.Brand>
          <Nav className="me-auto">
            <HashLink className='nav-link' smooth to={"/#landing"}>Home</HashLink>
            <HashLink className='nav-link' smooth to={"/#authentication"}>Login</HashLink>
            <HashLink className='nav-link' smooth to={"/#contactus"}>Contact Us</HashLink>
            <HashLink className='nav-link' smooth to={"/#chatbot-page"}>ChatBot</HashLink>
            {/* <Nav.Link to="/communitylogin">Community Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header