import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Authentication from './Authentication';
import TeleHealth from './TeleHealth';
import ContactUs from './ContactUs';
import Footer from './Footer';
import '../App.css';

function Landing() {
  return (
    <div>
      <Header/>
      <Container className='min-vh-100 d-flex align-items-center'>
        <Row className='d-flex vh-100'>
          <Col className='width50perc d-flex justify-content-center center flex-column w-100'>
            <h1 className='headinf'>MatHeal</h1>
          </Col>
          <Col className='d-flex justify-content-center flex-column w-100'>
            MatHeal aims to provide support and the help that you require to get through pregnancy safely. It gives an interface for the new mothers to connect with telehealth services, baby product suppliers, doulas and midwife, through an online platform which can be accessed with ease with the help of and internet connection.
          </Col>
        </Row>
      </Container>
      <Authentication />
      <TeleHealth />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Landing;