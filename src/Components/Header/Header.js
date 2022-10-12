import React from "react";
import image01 from "../../images/image01.jpg";
import image02 from "../../images/image02.jpg";
import image03 from "../../images/image03.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import Carousel from "react-bootstrap/Carousel";

import Card from "react-bootstrap/Card";

const Header = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <strong className="site-name">
              Challenge <span>The Brain</span>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/topics">Topics</Nav.Link>
              <Nav.Link href="/statistics">Statistics</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link> */}

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className="header">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeClassName" : undefined
                }
                to="/home"
              >
                Home
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  isActive ? "activeClassName" : undefined
                }
                to="/topics"
              >
                Topics
              </NavLink> */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeClassName" : undefined
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeClassName" : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={image01} alt="First slide" />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image02} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image03} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </nav>
  );
};

export default Header;
