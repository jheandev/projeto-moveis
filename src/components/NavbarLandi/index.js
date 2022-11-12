import React from "react";

import { Row, Col } from "react-bootstrap";

import Ellipse2 from "../../assets/img/Ellipse2.svg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BiSearchAlt2 } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

import "./style.css";

function NavbarLandi() {
  return (
    <Navbar id="container2" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Funiro.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link id="item1" href="#action1">
              Products
            </Nav.Link>
            <Nav.Link id="item1" href="#action2">
              Rooms
            </Nav.Link>

            <Nav.Link id="item1" href="#" disabled>
              Inspirations
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <button id="botao-nav" type="button">
              <BiSearchAlt2 />
            </button>

            <button id="botao-coracao" type="button">
              <BiHeart />
            </button>

            <button id="botao-carrinho" type="button">
              <BiCart />
            </button>
            <Form.Control
              id="pesquisa"
              type="search"
              placeholder=" Search for minimalist chair"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <Row>
          <Col id="foto-mulher">
            <img src={Ellipse2} alt="Ellipse2" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
export default NavbarLandi;
