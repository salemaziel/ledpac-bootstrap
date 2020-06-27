import React from "react";

import {
  Airport1,
  Airport2,
  Airport3,
  Airport4,
  Airport5,
  CobNewGen,
  CobConnector,
  CobLedStrip,
  CobLedStrip2,
  CobLedStrip3,
  CobLedStrip4,
  CobLedStrip5,
  CobLighting,
  CobSpecs,
  CobSpecs2,
  UVCWand1,
  UVCWand2,
  UVCWand3_1,
  UVCSpectrum,
  Twentyfive_1,
  Twentyfive_2,
  Fifty_1,
  Fifty_2,
  Sixtyfour_1,
  Sixtyfour_2,
  SixFourZero_1,
  SixFourZero_2,
  OneTwentyEight_1,
  OneTwentyEight_2,
  TwentyFive_BlackBG,
  TwentyFive_BlackSquare,
  TwentyFive_VertSquare,
  OneTwentyEight_VertSquare,
  Fifty_VertSquare,
  Sixtyfour_VertSquare,
  Sixtyfourzero_VertSquare

} from "../../../../images/index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import { Link } from "gatsby";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import uvcStyles from "./uvc.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={uvcStyles.Cob}>*/}

        <Card className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.CategoryRow}>
            <Col>
            <div className={uvcStyles.ImageFit} >
                <img src={OneTwentyEight_VertSquare} alt /*style={{height: '100%'}}*/ />
            </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
              <Card.Title>
              <h3 className={uvcStyles.ProductTitle}>
                128 Ultraviolet UV-C LED Microorganism Inactivation Wand
              </h3></Card.Title>
              <Card.Subtitle>
              <h4>MODEL: XLP 128.30.640</h4></Card.Subtitle>
              <Card.Text>
              <p className={uvcStyles.ProductText}>
                <strong> Features:</strong>
                <ul>
                  <li>Beeping sensor switch</li>
                  <li>Premium UV-C LEDs </li>
                  <li>Expandable design</li>
                  <li>High impact lenses</li>
                  <li>Safety gravity switch</li>
                  <li>USB-C Power input</li>
                </ul>
              </p>
              <ul className={uvcStyles.actions}>
                <li>
                  <Link to="#" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.CategoryRow}>
            <Col>
            <div className={uvcStyles.ImageFit} >
                <img src={TwentyFive_VertSquare} alt /*style={{height: '100%'}}*/ />
            </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
              <Card.Title>
              <h3 className={uvcStyles.ProductTitle}>
                25 Ultraviolet UV-C LED Microorganism Inactivation Wand
              </h3></Card.Title>
              <Card.Subtitle>
              <h4>Model: SLP 25.6.150</h4></Card.Subtitle>
              <Card.Text>
              <p className={uvcStyles.ProductText}>
                <strong> Features:</strong>
                <ul>
                  <li>Beeping sensor switch</li>
                  <li>Premium UV-C LEDs </li>
                  <li>Expandable design</li>
                  <li>High impact lenses</li>
                  <li>Safety gravity switch</li>
                  <li>USB-C Power input</li>
                </ul>
              </p>
              <ul className={uvcStyles.actions}>
                <li>
                  <Link to="#" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.CategoryRow}>
            <Col>
            <div className={uvcStyles.ImageFit} >
                <img src={Fifty_VertSquare} alt /*style={{height: '100%'}}*/ />
            </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
              <Card.Title>
              <h3 className={uvcStyles.ProductTitle}>
                50 Ultraviolet UV-C LED Microorganism Inactivation Wand
              </h3></Card.Title>
              <Card.Subtitle>
              <h4>MODEL: SLP 50.12.300</h4></Card.Subtitle>
              <Card.Text>
              <p className={uvcStyles.ProductText}>
                <strong> Features:</strong>
                <ul>
                  <li>Beeping sensor switch</li>
                  <li>Premium UV-C LEDs </li>
                  <li>Expandable design</li>
                  <li>High impact lenses</li>
                  <li>Safety gravity switch</li>
                  <li>USB-C Power input</li>
                </ul>
              </p>
              <ul className={uvcStyles.actions}>
                <li>
                  <Link to="#" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>


        <br />

       <Card className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.CategoryRow}>
            <Col>
            <div className={uvcStyles.ImageFit} >
                <img src={TwentyFive_VertSquare} alt /*style={{height: '100%'}}*/ />
            </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
              <Card.Title>
              <h3 className={uvcStyles.ProductTitle}>
                64 Ultraviolet UV-C LED Microorganism Inactivation Wand
              </h3></Card.Title>
              <Card.Subtitle>
              <h4>MODEL: XLP 64.15.384</h4></Card.Subtitle>
              <Card.Text>
              <p className={uvcStyles.ProductText}>
                <strong> Features:</strong>
                <ul>
                  <li>Beeping sensor switch</li>
                  <li>Premium UV-C LEDs </li>
                  <li>Expandable design</li>
                  <li>High impact lenses</li>
                  <li>Safety gravity switch</li>
                  <li>USB-C Power input</li>
                </ul>
              </p>
              <ul className={uvcStyles.actions}>
                <li>
                  <Link to="#" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>

        <br />

        <Card className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.CategoryRow}>
            <Col>
            <div className={uvcStyles.ImageFit} >
                <img src={Sixtyfourzero_VertSquare} alt /*style={{height: '100%'}}*/ />
            </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
              <Card.Title>
              <h3 className={uvcStyles.ProductTitle}>
                640 Ultraviolet UV-C LED Microorganism Inactivation Wand
              </h3></Card.Title>
              <Card.Subtitle>
              <h4>MODEL: XLP 640.150.3840</h4></Card.Subtitle>
              <Card.Text>
              <p className={uvcStyles.ProductText}>
                <strong> Features:</strong>
                <ul>
                  <li>Beeping sensor switch</li>
                  <li>Premium UV-C LEDs </li>
                  <li>Expandable design</li>
                  <li>High impact lenses</li>
                  <li>Safety gravity switch</li>
                  <li>USB-C Power input</li>
                </ul>
              </p>
              <ul className={uvcStyles.actions}>
                <li>
                  <Link to="#" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>{" "}
        </Card>
      </div>
    </div>
  </section>
);

export default SectionTwo;
