import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div className='bg-dark text-white w-auto p-3 align-items-center'>
        <Container className='min-vh-60'>
            {/* <Row>
                <Col>
                    <h3>Sitemap</h3>
                </Col>
                <Col>
                    <Row>Home</Row>
                    <Row>Documentation</Row>
                </Col>
            </Row>
            <br/>
            <br/> */}
            <Row>
                <Col>Copyright, 2022 @developers</Col>
                <Col>Created with by <a href='https://github.com/VishrutAggarwal' class='text-light stretched-link'>Vishrut</a>, <a href='https://github.com/aku1310' class='text-light stretched-link'>Akanksha</a>, <a href='https://github.com/ArshPanesar' class='text-light stretched-link'>Arsh</a>, <a href='hhttps://github.com/shru1032' class='text-light stretched-link'>Shruti</a></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer