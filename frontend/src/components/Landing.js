import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';

function Landing() {
  return (
    <div>
      <Header/>
      <Container className='min-vh-100 border d-flex align-items-center'>
        <Row className='border d-flex vh-100'>
          <Col className=' border d-flex justify-content-center center flex-column w-100'>
            <h1>MatHeal</h1>
          </Col>
          <Col className='d-flex justify-content-center flex-column w-100'>
            MatHeal aims to provide support and the help that you require to get through pregnancy safely.
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing;