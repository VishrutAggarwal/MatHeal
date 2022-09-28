import React from 'react';
import { Card, Col, ListGroup, Row, Container } from 'react-bootstrap'


export default function CommunityDashBoard() {
    return (
        <div>
            <Container className='min-vh-100 border d-flex align-items-center'>
                <Row className='border d-flex vh-100'>
                    <Col className=' border d-flex justify-content-center center flex-column w-100'>
                        <h1>Child Development</h1>
                        <h1>Healthcare</h1>
                    </Col>
                    <Col className='d-flex justify-content-center flex-column w-100'>
                        <Card style={{ width: '18rem' }} className='m-4 p-3'>
                            <Card.Title>Name1</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Lorem ipsum</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '18rem' }} className='m-4 p-3'>
                            <Card.Title>Name2</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Lorem ipsum</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
