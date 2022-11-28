import React from "react";

import { Row, Col, Container, Card, CardGroup, Button } from "react-bootstrap";

import imghigh from "../../assets/img/Group-high.svg";
import imgwarrany from "../../assets/img/Vector-warrany.svg";
import imgfree from "../../assets/img/Vector-free.svg";
import imgsupport from "../../assets/img/Vector-support.svg";

import "./style.css";

function Feature() {
  return (
    <>
      <Container>
        <CardGroup className="Layout">
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <img src={imghigh} alt="Showmore" />
              </button>
              <Card.Title>High Quality</Card.Title>
              <Card.Text id="sub-titulo">crafted from top materials</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <img src={imgwarrany} alt="Showmore" />
              </button>
              <Card.Title>Warrany Protection</Card.Title>
              <Card.Text id="sub-titulo">Over 2 years</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <img src={imgfree} alt="Showmore" />
              </button>
              <Card.Title>Fre Shipping</Card.Title>
              <Card.Text id="sub-titulo">Order over 150 $</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <img src={imgsupport} alt="Showmore" />
              </button>
              <Card.Title>24/7 Support</Card.Title>
              <Card.Text id="sub-titulo">Dedicated Support</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
export default Feature;
