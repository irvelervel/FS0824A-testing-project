import { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const HiddenSection = () => {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <Button
            variant="success"
            onClick={() => {
              setShow(!show) // inverte
            }}
          >
            {show ? 'NASCONDI' : 'MOSTRA'}
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          {show && (
            <Card>
              <Card.Img
                variant="top"
                alt="dog picture"
                src="https://placedog.net/600"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HiddenSection
