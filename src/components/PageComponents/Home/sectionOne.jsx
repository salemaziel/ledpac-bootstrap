import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Industrial from "../../../images/sept2021/led-923232_1920.jpg";
import Commercial from "../../../images/sept2021/light-commercial-812677_1280.jpg";
import Residential from "../../../images/finley/finley-19.jpg";
import Medical from "../../../images/sept2021/2021-09-22_14-30-medical.png";

import homeStyles from "./home.module.css";

const SectionOne = () => (
  <section id="one" className="wrapper">
    <Container>
      <Row>
        <Col>
          <h1 className={homeStyles.Heading}>
            Leading The Industry with The Latest In Cutting Edge LED Technology
          </h1>
        </Col>
      </Row>
      </Container>
      {/*<Container fluid className="mt-5" style={{padding:`0 5rem`}}>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <Card.Img src={Industrial} style={{ height: `100%` }} />
              <Card.ImgOverlay>
                <Card.Body>
                  <Card.Footer>
                    <Card.Title className="text-white font-weight-bolder" style={{textShadow: `2px 2px 3px black`}}>
                      Industrial
                    </Card.Title>
                  </Card.Footer>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
            <Card>
              <Card.Img src={Commercial} style={{ height: `100%` }} />
              <Card.ImgOverlay>
                <Card.Body>
                  <Card.Footer>
                    <Card.Title className="text-white font-weight-bolder" style={{textShadow: `2px 2px 3px black`}}>
                      Commercial
                    </Card.Title>
                  </Card.Footer>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
            <Card>
              <Card.Img src={Residential} style={{ height: `100%` }} />
              <Card.ImgOverlay>
                <Card.Body>
                  <Card.Footer>
                    <Card.Title className="text-white font-weight-bolder" style={{textShadow: `2px 2px 3px black`}}>
                      Residential
                    </Card.Title>
                  </Card.Footer>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
            <Card>
              <Card.Img src={Medical} style={{ height: `100%` }} />
              <Card.ImgOverlay>
                <Card.Body>

                  <Card.Footer>
                  <Card.Title className="text-white font-weight-bolder" style={{textShadow: `2px 2px 3px black`}}>
                    Medical
                  </Card.Title>
                  </Card.Footer>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          </CardDeck>
        </Col>
      </Row>
</Container>*/}
  </section>
);

export default SectionOne;
