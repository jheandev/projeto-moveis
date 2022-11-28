import React from "react";

import { Row, Col, Container, CardGroup, Card, Button } from "react-bootstrap";

import imgsharepc from "../../assets/img/share-pc.svg";
import imgquarto from "../../assets/img/share-quarto.svg";
import imgcozinha from "../../assets/img/share-cozinha.svg";

import imgdetalhequarto from "../../assets/img/share-detalhequarto.png";
import imgdecoracao from "../../assets/img/share-decoracao.svg";
import imgobjetocozinha from "../../assets/img/share-objetocozinha.svg";

import "./style.css";

function Share() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p id="titulo-Share">Share your setup with</p>
            <p id="titulo-funiro">#FuniroFurniture</p>
          </Col>
        </Row>

        <CardGroup>
          <Card id="mesapc-img">
            <Card.Img variant="top" src={imgsharepc} />
          </Card>

          <Card id="img-quarto">
            <Card.Img variant="top" src={imgquarto} />
          </Card>

          <Card id="img-cozinha">
            <Card.Img variant="top" src={imgcozinha} />
          </Card>
        </CardGroup>

        <CardGroup>
          <Card id="quartodetalhe-img">
            <Card.Img variant="top" src={imgdetalhequarto} />
          </Card>

          <Card id="img-decoracao">
            <Card.Img variant="top" src={imgdecoracao} />
          </Card>

          <Card id="img-objetocozinha">
            <Card.Img variant="top" src={imgobjetocozinha} />
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
export default Share;
