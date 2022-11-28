import React from "react";

import { Row, Col } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";

import Ellipse2 from "../../assets/img/Ellipse2.svg";
import coracao from "../../assets/img/Heart.svg";
import carrinho from "../../assets/img/Cart.svg";
import Search from "../../assets/img/Search.svg";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./style.css";

function NavbarLandi() {
  return (
    <Navbar id="container2" expand="lg">
      <Container fluid>
        <Navbar.Brand id="grid-funiro">Funiro.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav id="bg-a">
            <Nav.Link id="item1-products" href="#action1">
              Products
            </Nav.Link>
            <Nav.Link id="item2-rooms" href="#action2">
              Rooms
            </Nav.Link>

            <Nav.Link id="item3-inspirations" href="#action3">
              Inspirations
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <button id="botao-coracao" type="button">
              <img src={coracao} alt="Ellipse2" />
            </button>

            <button id="botao-carrinho" type="button">
              <img src={carrinho} alt="Ellipse2" />
            </button>

            <InputGroup id="pesquisa">
              <InputGroup.Text id="btnGroupAddon1">
                <img src={Search} alt="Ellipse2" />
              </InputGroup.Text>
              <Form.Control
                id="inputnav"
                type="text"
                placeholder="Search for minimalist chair"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
            </InputGroup>
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
