import React from 'react'
import { Card, ListGroup, Row, Container } from 'react-bootstrap'

function TeleHealth() {
  return (
    <div>
        <Container className='min-vh-100'>

            <Row>
                Tele-Health Options according to locations:
            </Row>
            <Row>
                <Card style={{ width: '18rem' }} className='m-4 p-3'>
                    <Card.Title>New Delhi</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Helpline # 1</ListGroup.Item>
                        <ListGroup.Item>Helpline # 2</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Card style={{ width: '18rem' }} className='m-4 p-3'>
                    <Card.Title>Noida</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Helpline # 1</ListGroup.Item>
                        <ListGroup.Item>Helpline # 2</ListGroup.Item>
                        <ListGroup.Item>Helpline # 3</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Card style={{ width: '18rem' }} className='m-4 p-3'>
                    <Card.Title>Gurugram</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Helpline # 1</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>
        </Container>
        

    </div>
  )
}

export default TeleHealth