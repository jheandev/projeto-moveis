import React from "react";

import { Row, Col } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import Ellipse2 from "../../assets/img/Ellipse2.svg";
import coracao from "../../assets/img/Heart.svg";
import carrinho from "../../assets/img/Cart.svg";
import Search from "../../assets/img/Search.svg";

import "./style.css";

function NavbarLandi() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ margin: 0 }}>
        <Navbar.Brand href="#home">Funiro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Rooms</Nav.Link>
            <Nav.Link href="#pricing">Inspirations</Nav.Link>
          </Nav>

          <Nav className="me-auto">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Nav>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#deets">
                <img src={coracao} alt="Ellipse2" />
              </Nav.Link>

              <Nav.Link href="#deets">
                <img src={carrinho} alt="Ellipse2" />
              </Nav.Link>

              <Nav.Link href="#deets">
                <img src={Ellipse2} alt="Ellipse2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarLandi;
