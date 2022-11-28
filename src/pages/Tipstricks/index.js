import React from "react";

import { Row, Col, Container, CardGroup, Card, Button } from "react-bootstrap";

import Rectangle32 from "../../assets/img/Rectangle 32.svg";
import Rectangle33 from "../../assets/img/Rectangle 33.svg";
import Rectangle34 from "../../assets/img/Rectangle 34.svg";

import "./style.css";

function Tipstricks() {
  return (
    <>
      <Container>
        <Row>
          <Col id="titulo-tipstricks">
            <p>Tips & Tricks</p>
          </Col>
        </Row>

        <CardGroup className="titulo-tips">
          <Card id="borda2">
            <Card.Img id="imagens" variant="top" src={Rectangle32} />
            <Card.Body>
              <Card.Title id="paragrafo-tips">
                How to create a living room to love
              </Card.Title>
              <Card.Text id="sub-titulo">20 jan 2020</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda2">
            <Card.Img id="imagens" variant="top" src={Rectangle33} />
            <Card.Body>
              <Card.Title id="paragrafo-tips">
                Solition for clean look working space
              </Card.Title>
              <Card.Text id="sub-titulo">10 jan 2020</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda2">
            <Card.Img id="imagens" variant="top" src={Rectangle34} />
            <Card.Body>
              <Card.Title id="paragrafo-tips">
                Make your cooking activity more fun with good setup
              </Card.Title>
              <Card.Text id="sub-titulo">20 jan 2020</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
export default Tipstricks;
