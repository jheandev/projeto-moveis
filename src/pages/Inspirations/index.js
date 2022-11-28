import React from "react";

import { Row, Col, Container, Card, Button } from "react-bootstrap";

import imginspirations1 from "../../assets/img/Image.svg";
import imginspirations2 from "../../assets/img/Rectangle 25.svg";

import "./style.css";

function Inspirations() {
  return (
    <>
      <Container id="Beautiful">
        <Row>
          <Col>
            <Row id="titulo-beautiful">50+ Beautiful rooms Inspirations</Row>
            <Row id="segundo-titulo">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </Row>

            <Row>
              <Button id="botao-explore" variant="primary">
                Explore More
              </Button>
            </Row>
          </Col>

          <Col xs={4}>
            <Row id="img-quartos1">
              <img src={imginspirations1} alt="Imagem" />
            </Row>
          </Col>

          <Col xs={4}>
            <Row id="img-quartos2">
              <img src={imginspirations2} alt="Rectangle 25" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Inspirations;
