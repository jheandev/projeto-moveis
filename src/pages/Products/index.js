import React from "react";

import { Row, Col, Container, Card, CardGroup, Button } from "react-bootstrap";

import imgSyltherine from "../../assets/img/Img-syltherine.svg";
import imgLeviosa from "../../assets/img/Img-leviosa.svg";
import imgLolito from "../../assets/img/Img-lolito.svg";
import imgRespira from "../../assets/img/Imgrespira.svg";

import imgGrifo from "../../assets/img/Img-grifo.svg";
import imgMuggo from "../../assets/img/img-muggo.svg";
import imgPingky from "../../assets/img/Img-pingky.svg";
import imgPotty from "../../assets/img/Img-potty.svg";

import Showmore from "../../assets/img/Showmore.svg";

import "./style.css";

function Products() {
  return (
    <>
      <Container>
        <Row>
          <Col id="Titulo">
            <p>Our Products</p>
          </Col>
        </Row>

        <CardGroup className="grid">
          <Card id="borda-img">
            <Card.Img variant="top" src={imgSyltherine} />
            <Card.Body>
              <Card.Title>Syltherine</Card.Title>
              <Card.Text id="sub-titulo">Stylish cofe chair</Card.Text>
              <Card.Text>Rp 2.500.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-img">
            <Card.Img variant="top" src={imgLeviosa} />
            <Card.Body>
              <Card.Title>Leviosa</Card.Title>
              <Card.Text id="sub-titulo">Stylish cofe chair</Card.Text>
              <Card.Text>Rp 2.500.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-img">
            <Card.Img variant="top" src={imgLolito} />
            <Card.Body>
              <Card.Title>Lolito</Card.Title>
              <Card.Text id="sub-titulo">Luxury big sofa</Card.Text>
              <Card.Text>Rp 7.000.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-img">
            <Card.Img variant="top" src={imgRespira} />
            <Card.Body>
              <Card.Title>Respira</Card.Title>
              <Card.Text id="sub-titulo">Minimalist fan</Card.Text>
              <Card.Text>Rp 5.000.000</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup className="grid2">
          <Card id="borda-img">
            <Card.Img variant="top" src={imgGrifo} />
            <Card.Body>
              <Card.Title>Grifo</Card.Title>
              <Card.Text id="sub-titulo">Night lamp</Card.Text>
              <Card.Text>Rp 1.500.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-img">
            <Card.Img variant="top" src={imgMuggo} />
            <Card.Body>
              <Card.Title>Muggo</Card.Title>
              <Card.Text id="sub-titulo">Small mug</Card.Text>
              <Card.Text>Rp 150.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-img">
            <Card.Img variant="top" src={imgPingky} />
            <Card.Body>
              <Card.Title>Pingky</Card.Title>
              <Card.Text id="sub-titulo">Cute bed set</Card.Text>
              <Card.Text>Rp 7.000.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-img">
            <Card.Img variant="top" src={imgPotty} />
            <Card.Body>
              <Card.Title>Potty</Card.Title>
              <Card.Text id="sub-titulo">Minimalist flower pot</Card.Text>
              <Card.Text>Rp 5.00.000</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <Row>
          <Col id="Show-more">
            <img src={Showmore} alt="Showmore" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Products;
