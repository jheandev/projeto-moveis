import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { HiOutlineLocationMarker } from "react-icons/hi";

import { BsFillTelephoneFill } from "react-icons/bs";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import imglogoinput from "../../assets/img/carbon_logo.svg";

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col id="funiro" xs={2}>
          <Row id="titulo-negrito">Funiro</Row>
          <Row>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </Row>
          <Row id="sub-Sawo"> Sawojajar Malang,Indonesia</Row>
          <Row id="sub-Sawo"> +6289 456 3455</Row>
          <Row>www.funiro.com</Row>
          <button id="icon-call" type="button">
            <BsFillTelephoneFill />
          </button>

          <button id="icon-locali" type="button">
            <HiOutlineLocationMarker />
          </button>
        </Col>

        <Col id="Menu">
          <Row id="titulo-negrito"> Menu</Row>
          <Row>Products</Row>
          <Row>Rooms</Row>
          <Row>Inspirations</Row>
          <Row>About Us</Row>
          <Row>Terms & Policy</Row>
        </Col>

        <Col id="Account">
          <Row id="titulo-negrito">Account</Row>
          <Row>My Account</Row>
          <Row>Checkout</Row>
          <Row>My Cart</Row>
          <Row>My catalog</Row>
        </Col>

        <Col id="Stay" xs={2}>
          <Row id="titulo-negrito">Stay Connected</Row>
          <Row>Facebook</Row>
          <Row>Instagram</Row>
          <Row>Twitter</Row>
        </Col>

        <Col id="Stay-Updated">
          <Row id="titulo-negrito">Stay Updated</Row>
        </Col>
      </Row>

      <ButtonToolbar id="botao-stay">
        <InputGroup>
          <Form.Control id="input" type="text" placeholder="Enter your email" />
          <InputGroup.Text id="btnGroupAddon2">
            <button id="logo-botao">
              <img src={imglogoinput} alt="logoinput" />
            </button>
          </InputGroup.Text>
        </InputGroup>
      </ButtonToolbar>
    </Container>
  );
}

export default Footer;
