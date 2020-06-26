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
  OneTwentyEight_2

} from "../../../../images/index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from 'react-bootstrap/Media'
import { Link } from "gatsby";

import uvcStyles from "./uvc.module.css";

const SectionTwo = () => (
  <section>
  <div className="box alt">
    <div className="row gtr-uniform gtr-50">
      {/*<div className={uvcStyles.Cob}>*/}

      <div className={uvcStyles.ProductBox}>
        <Row className={uvcStyles.CategoryRow}>
          <Col>
            {" "}
            <span className="image fit">
              <img src={OneTwentyEight_1} alt />
              <img src={OneTwentyEight_2} alt />
            </span>
          </Col>
          <Col>
            <h3 className={uvcStyles.ProductTitle}>
            128 Ultraviolet UV-C LED Microorganism Inactivation Wand
            
            </h3>
            <h4>Model: XLP 128.30.640</h4>
            <p>
              <strong> Features:</strong>
              <ul>
                <li>
                Beeping sensor switch
                </li>
                <li>
                Premium UV-C LEDs{" "}
                </li>
                <li>Expandable design</li>
                <li>
                High impact lenses
                </li>
                <li>
                Safety gravity switch
                </li>
                <li>
                USB-C Power input
                </li>
              </ul>
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </Col>
        </Row>{" "}
      </div>

    <br />

      <div className={uvcStyles.ProductBox}>
        <Row className={uvcStyles.CategoryRow}>
          <Col>
            {" "}
            <span className="image fit">
            <img src={Twentyfive_1} alt />
              <img src={Twentyfive_2} alt />            </span>
          </Col>
          <Col>
            {" "}
            <h3 className={uvcStyles.ProductTitle}>
            25 Ultraviolet UV-C LED Microorganism Inactivation Wand
            
            </h3>
            <h4>Model: SLP 25.6.150</h4>
            <p>
              <strong> Features:</strong>
              <ul>
                <li>
                Beeping sensor switch
                </li>
                <li>
                Premium UV-C LEDs{" "}
                </li>
                <li>Expandable design</li>
                <li>
                High impact lenses
                </li>
                <li>
                Safety gravity switch
                </li>
                <li>
                USB-C Power input
                </li>
              </ul>
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </Col>
        </Row>{" "}
      </div>


      <br />

      <div className={uvcStyles.ProductBox}>
        <Row className={uvcStyles.CategoryRow}>
          <Col>
            <span className="image fit">
              <img src={Fifty_1} alt />
              <img src={Fifty_2} alt />

            </span>
          </Col>
          <Col>
          <h3 className={uvcStyles.ProductTitle}>
            50 Ultraviolet UV-C LED Microorganism Inactivation Wand
            
            </h3>
            <h4>Model: SLP 50.12.300</h4>
            <p>
              <strong> Features:</strong>
              <ul>
                <li>
                Beeping sensor switch
                </li>
                <li>
                Premium UV-C LEDs{" "}
                </li>
                <li>Expandable design</li>
                <li>
                High impact lenses
                </li>
                <li>
                Safety gravity switch
                </li>
                <li>
                USB-C Power input
                </li>
              </ul>
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <br />



      <div className={uvcStyles.ProductBox}>
        <Row className={uvcStyles.CategoryRow}>
          <Col>
            <span className="image fit">
                {" "}
                <img src={Sixtyfour_1} alt="" />{" "}
                <img src={Sixtyfour_2} alt="" />{" "}

            </span>
          </Col>
          <Col>
              {" "}
              <h3 className={uvcStyles.ProductTitle}>
            64 Ultraviolet UV-C LED Microorganism Inactivation Wand
            
            </h3>
            <h4>Model: XLP 64.15.384</h4>
            <p>
              <strong> Features:</strong>
              <ul>
                <li>
                Beeping sensor switch
                </li>
                <li>
                Premium UV-C LEDs{" "}
                </li>
                <li>Expandable design</li>
                <li>
                High impact lenses
                </li>
                <li>
                Safety gravity switch
                </li>
                <li>
                USB-C Power input
                </li>
              </ul>
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>


      <br />


      <div className={uvcStyles.ProductBox}>
        <Row className={uvcStyles.CategoryRow}>
          <Col>
            <span className="image fit">
                {" "}
                <img src={SixFourZero_1} alt="" />{" "}
                <img src={SixFourZero_2} alt="" />{" "}

            </span>
          </Col>
          <Col>
              {" "}
              <h3 className={uvcStyles.ProductTitle}>
            640 Ultraviolet UV-C LED Microorganism Inactivation Wand
            
            </h3>
            <h4>Model: XLP 640.150.3840</h4>
            <p>
              <strong> Features:</strong>
              <ul>
                <li>
                Beeping sensor switch
                </li>
                <li>
                Premium UV-C LEDs{" "}
                </li>
                <li>Expandable design</li>
                <li>
                High impact lenses
                </li>
                <li>
                Safety gravity switch
                </li>
                <li>
                USB-C Power input
                </li>
              </ul>
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      </div>
    </div>
  </section>
);

export default SectionTwo;
