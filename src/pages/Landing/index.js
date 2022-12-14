import React from "react";
import { Row, Col, Container, Card, CardGroup, Button } from "react-bootstrap";
import NavbarLandi from "../../components/NavbarLandi";
import Footer from "../../components/Footer/Footer";

import Gallery from "../../assets/img/image-galeria.svg";

import "./style.css";
import Feature from "../Feature";
import Products from "../Products";
import Inspirations from "../Inspirations";
import Tipstricks from "../Tipstricks";
import Share from "../Share";

function Landing() {
  return (
    <>
      <NavbarLandi />
      {/*  <Feature />
      <Products />
      <Inspirations />
      <Tipstricks />
      <Share /> */}

      <Container className="geral_grid_landing">
        <Row>
          <Col id="landing_grid" sm={4}>
            <Row id="titulo-high">High-Quality Furniture Just For You</Row>
            <Row id="sub-titulo-Ourfumiture">
              Our furniture is made from selected and best quality materials
              that are suitable for your dream home
            </Row>
            <Row>
              <Button id="botao-shop" variant="primary">
                Shop Now
              </Button>
            </Row>
          </Col>
          <Col sm={8}>
            <Row id="img-gallery">
              <img src={Gallery} alt="imggaleria" />
            </Row>
          </Col>
        </Row>
      </Container>

      {/*  <Container className="container">
        <Card id="Hero-Content" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title id="titulo-High">
              High-Quality Furniture Just For You
            </Card.Title>
            <Card.Text id="sub-titulo-Ourfumiture">
              Our furniture is made from selected and best quality materials
              that are suitable for your dream home
            </Card.Text>
            <Button id="botao-shop" variant="primary">
              Shop Now
            </Button>
          </Card.Body>
        </Card>

        <Row>
          <Col sm={8} id="Gallery">
            <img src={Gallery} alt="imggaleria" width="92%" />
          </Col>
        </Row>
      </Container> */}
      {/* <Footer /> */}
    </>
  );
}

export default Landing;
