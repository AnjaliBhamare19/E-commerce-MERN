import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CNavbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");

  return (
    <Navbar expand="lg" className="bg-body-tertiary pt-0 pb-2" bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={assets.logo}
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => setMenu("about-us")}
              className={menu === "about-us" ? "active" : ""}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#footer"
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="navbar-right d-flex align-items-center">
            <img src={assets.search_icon} alt="" className="me-2" />
            <div className="navbar-search-icon position-relative me-2">
              <img src={assets.basket_icon} alt="" />
              <div className="dot position-absolute top-0 start-100 translate-middle"></div>
            </div>
            <Button variant="primary"
              onClick={()=> setShowLogin(true)}
            >Sign In</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CNavbar;
