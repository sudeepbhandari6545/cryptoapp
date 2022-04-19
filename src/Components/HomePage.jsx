import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Text } from '@chakra-ui/react'

//style
import './Main.css'

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <div className="home_heading">
          <h2>global crypto stats</h2>
        </div>
        <Row>
          <Col lg={6}>
            <div>
              <p>Total Cryptocrriences</p>
              <p>5</p>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <p>Total Market Cap</p>
              <p>5</p>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <p>Total Markets</p>
              <p>5</p>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <p>Total Exchange</p>
              <p>5</p>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <p>Total 24h Volume</p>
              <p>5</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
