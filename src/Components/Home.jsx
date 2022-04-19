import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Routes, Route, Router } from 'react-router-dom'
import {
  NavBar,
  HomePage,
  CryptoCurrencies,
  CryptoDetail,
  Exchange,
  News,
} from '../Components/index'
//style
import './Home.css'

const Home = () => {
  return (
    <>
      <Row className="">
        <Col lg={2} md={5} sm={4} xs={12}>
          <div className="header">
            <NavBar />
          </div>
        </Col>
        <Col>
          <div className="main">
            <Container fluid>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route
                    exact
                    path="/cyptrocurrencies"
                    element={<CryptoCurrencies />}
                  />

                  <Route exact path="/exchange" element={<Exchange />} />

                  <Route exact path="/news" element={<News />} />

                  <Route
                    exact
                    path="/crypto/:coinId"
                    element={<CryptoDetail />}
                  />
                </Routes>
              </div>
            </Container>
            {/* footer start */}
            <div className="footer text-center fixed-bottom">
              <h3>cryptoverse all right reserved</h3>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Home
