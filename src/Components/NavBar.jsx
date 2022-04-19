import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  AiFillFund,
  AiFillHome,
  AiFillMoneyCollect,
  AiFillBulb,
} from 'react-icons/ai'

//style
import './Style.css'

const NavBar = () => {
  return (
    <>
      <Container fluid>
        <div className="d-flex">
          <Avatar
            src="https://cdn6.f-cdn.com/contestentries/1471847/22138032/5c5fcd1828074_thumb900.jpg"
            alt="logo"
            w="50px"
            h="50px"
            borderRadius="50%"
            marginTop="10px"
            cursor="pointer"
          />
          <Link to="/" className="global_link">
            <div className="heading">
              <h1 className="text-center">cyptroverse</h1>
            </div>
          </Link>
        </div>
        {/* navbar start */}
        <>
          <Nav className="d-grid mt-5">
            <Nav.Item>
              <Link to="/" className="nav_link">
                <AiFillHome className="nav_icons" />
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/cyptrocurrencies" className="nav_link">
                <AiFillFund className="nav_icons" />
                Cryptocurrencies
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/exchange" className="nav_link">
                <AiFillMoneyCollect className="nav_icons" />
                Exchange
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/news" className="nav_link">
                <AiFillBulb className="nav_icons" />
                News
              </Link>
            </Nav.Item>
          </Nav>
        </>
      </Container>
    </>
  )
}

export default NavBar
