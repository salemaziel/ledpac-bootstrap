import React from "react";

import {
  TwentyFive_VertSquare,
  OneTwentyEight_VertSquare,
  Fifty_VertSquare,
  Sixtyfour_VertSquare,
  Sixtyfourzero_VertSquare,
} from "../../../../images/index";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import uvcStyles from "./uvc.module.css";

import Fifty from "../../../../assets/R7-50_UV-C_MICROBE_INACTIVATOR.pdf";
import TwentyFive from "../../../../assets/R7-25_UV-C_MICROBE_INACTIVATOR.pdf";
import OneTwentyEight from "../../../../assets/R7-128_UV-C_MICROBE_INACTIVATOR.pdf";
import SixtyFour from "../../../../assets/R7-64_UV-C_MICROBE_INACTIVATOR.pdf";
import SixFourZero from "../../../../assets/R7-640_UV-C_MICROBE_INACTIVATOR_TRACK.pdf";
import { Link } from "gatsby";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={uvcStyles.Cob}>*/}

        <Card className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.CategoryRow}>
            <Col>
              <div className={uvcStyles.ImageFit}>
                <img
                  src={OneTwentyEight_VertSquare}
                  alt /*style={{height: '100%'}}*/
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={uvcStyles.ProductTitle}>
                    128 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: XLP 128.30.640</h4>
                </Card.Subtitle>
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
                      <a
                        href={OneTwentyEight}
                        className="button"
                        target="_blank"
                      >
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={uvcStyles.actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                        target="_blank"
                      >
                        Contact
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
              <div className={uvcStyles.ImageFit}>
                <img
                  src={TwentyFive_VertSquare}
                  alt /*style={{height: '100%'}}*/
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={uvcStyles.ProductTitle}>
                    25 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>Model: SLP 25.6.150</h4>
                </Card.Subtitle>
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
                      <a href={TwentyFive} className="button" target="_blank">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={uvcStyles.actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                        target="_blank"
                      >
                        Contact
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
              <div className={uvcStyles.ImageFit}>
                <img src={Fifty_VertSquare} alt /*style={{height: '100%'}}*/ />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={uvcStyles.ProductTitle}>
                    50 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: SLP 50.12.300</h4>
                </Card.Subtitle>
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
                      <a href={Fifty} className="button" target="_blank">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={uvcStyles.actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                        target="_blank"
                      >
                        Contact
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
              <div className={uvcStyles.ImageFit}>
                <img
                  src={Sixtyfour_VertSquare}
                  alt /*style={{height: '100%'}}*/
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={uvcStyles.ProductTitle}>
                    64 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: XLP 64.15.384</h4>
                </Card.Subtitle>
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
                      <a href={SixtyFour} className="button" target="_blank">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={uvcStyles.actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                        target="_blank"
                      >
                        Contact
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
              <div className={uvcStyles.ImageFit}>
                <img
                  src={Sixtyfourzero_VertSquare}
                  alt /*style={{height: '100%'}}*/
                />
              </div>
            </Col>
            <Col>
              {" "}
              <Card.Body>
                <Card.Title>
                  <h3 className={uvcStyles.ProductTitle}>
                    640 Ultraviolet UV-C LED Microorganism Inactivation Wand
                  </h3>
                </Card.Title>
                <Card.Subtitle>
                  <h4>MODEL: XLP 640.150.3840</h4>
                </Card.Subtitle>
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
                      <a href={SixFourZero} className="button" target="_blank" rel="noreferrer">
                        Learn More
                      </a>
                    </li>
                  </ul>
                  <br />
                  <ul className={uvcStyles.actions}>
                    <li>
                      <Link to="/contact"
                        className="button"
                        
                      >
                        Contact
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
