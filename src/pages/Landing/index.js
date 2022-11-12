import React from "react";
import { Row, Col, Container, Card, CardGroup, Button } from "react-bootstrap";
import NavbarLandi from "../../components/NavbarLandi";
import Footer from "../../components/Footer/Footer";

import Gallery from "../../assets/img/images.svg";

import { BsTrophy } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import { BiStoreAlt } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";

import imagem from "../../assets/img/Images1.svg";
import imagem2 from "../../assets/img/Images2.svg";
import imagem3 from "../../assets/img/Images3.svg";
import imagem4 from "../../assets/img/Images4.svg";

import images5 from "../../assets/img/Images5.svg";
import images6 from "../../assets/img/images6.svg";
import images7 from "../../assets/img/Images7.svg";
import images8 from "../../assets/img/Images8.svg";

import Showmore from "../../assets/img/Showmore.svg";

import image from "../../assets/img/Image.svg";
import Rectangle from "../../assets/img/Rectangle 25.svg";

import Rectangle32 from "../../assets/img/Rectangle 32.svg";
import Rectangle33 from "../../assets/img/Rectangle 33.svg";
import Rectangle34 from "../../assets/img/Rectangle 34.svg";

import Imagesfuniro from "../../assets/img/Imagesfuniro.png";

import "./style.css";

function Landing() {
  return (
    <>
      <NavbarLandi />
      <Container className="container">
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
            <img src={Gallery} alt="foto1" width="92%" />
          </Col>
        </Row>

        <CardGroup className="Layout">
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <BsTrophy />
              </button>
              <Card.Title>High Quality</Card.Title>
              <Card.Text id="sub-titulo">crafted from top materials</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <BiCheckCircle />
              </button>
              <Card.Title>Warrany Protection</Card.Title>
              <Card.Text id="sub-titulo">Over 2 years</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <BiStoreAlt />
              </button>
              <Card.Title>Fre Shipping</Card.Title>
              <Card.Text id="sub-titulo">Order over 150 $</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda-galeria">
            <Card.Body>
              <button id="img-trop1" type="button">
                <MdOutlineSupportAgent />
              </button>
              <Card.Title>24/7 Support</Card.Title>
              <Card.Text id="sub-titulo">Dedicated Support</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <Row>
          <Col id="Titulo">
            <p>Our Products</p>
          </Col>
        </Row>

        <CardGroup className="grid">
          <Card id="borda">
            <Card.Img variant="top" src={imagem} />
            <Card.Body>
              <Card.Title>Syltherine</Card.Title>
              <Card.Text id="sub-titulo">Stylish cofe chair</Card.Text>
              <Card.Text>Rp 2.500.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda">
            <Card.Img variant="top" src={imagem2} />
            <Card.Body>
              <Card.Title>Leviosa</Card.Title>
              <Card.Text id="sub-titulo">Stylish cofe chair</Card.Text>
              <Card.Text>Rp 2.500.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda">
            <Card.Img variant="top" src={imagem3} />
            <Card.Body>
              <Card.Title>Lolito</Card.Title>
              <Card.Text id="sub-titulo">Luxury big sofa</Card.Text>
              <Card.Text>Rp 7.000.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda">
            <Card.Img variant="top" src={imagem4} />
            <Card.Body>
              <Card.Title>Lolito</Card.Title>
              <Card.Text id="sub-titulo">Luxury big sofa</Card.Text>
              <Card.Text>Rp 7.000.000</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup className="grid2">
          <Card id="borda">
            <Card.Img variant="top" src={images5} />
            <Card.Body>
              <Card.Title>Grifo</Card.Title>
              <Card.Text id="sub-titulo">Night lamp</Card.Text>
              <Card.Text>Rp 1.500.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda">
            <Card.Img variant="top" src={images6} />
            <Card.Body>
              <Card.Title>Muggo</Card.Title>
              <Card.Text id="sub-titulo">Small mug</Card.Text>
              <Card.Text>Rp 150.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda">
            <Card.Img variant="top" src={images7} />
            <Card.Body>
              <Card.Title>Pingky</Card.Title>
              <Card.Text id="sub-titulo">Cute bed set</Card.Text>
              <Card.Text>Rp 7.000.000</Card.Text>
            </Card.Body>
          </Card>
          <Card id="borda">
            <Card.Img variant="top" src={images8} />
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

        <Card id="Beautiful" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title id="titulo-beautiful">
              50+Beautiful rooms inspiration
            </Card.Title>
            <Card.Text id="segundo-titulo">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspeire you
            </Card.Text>
            <Button id="botao-explore" variant="primary">
              Explere More
            </Button>
          </Card.Body>
        </Card>

        <Row>
          <Col>
            <img id="img-quartos1" src={image} alt="Imagem" />
            <img id="img-quartos2" src={Rectangle} alt="Rectangle 25" />
          </Col>
        </Row>

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

        <Row>
          <Col>
            <p id="titulo-Share">Share your setup with</p>
            <p id="titulo-funiro">#FuniroFurniture</p>
          </Col>
        </Row>

        <CardGroup className="grid-funiro">
          <Card id="borda3">
            <Card.Img id="img-funiro" variant="top" src={Imagesfuniro} />
          </Card>
        </CardGroup>
      </Container>
      <Footer />
    </>
  );
}

export default Landing;
