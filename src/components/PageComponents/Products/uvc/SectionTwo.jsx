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
  UVCWand3,
  UVCSpectrum,
} from "../../../../images/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import uvcStyles from "./uvc.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={cobtyles.Cob}>*/}
        <div className={uvcStyles.ProductBox}>
          <Row className={uvcStyles.ProductRow}>
            <Col>
              <h3 className={uvcStyles.ProductTitle}>UltraViolet (UVC) LED</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              {/*<ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
</ul>*/}
            </Col>
            <Col>
              <span className="image fit">
                <img src={UVCWand1} alt />
              </span>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row gtr-uniform gtr-50">
        <Row className={uvcStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={UVCWand2} alt />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Advantage:</strong>
              <ul>
              <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </li>
              </ul>
              <strong> Specification:</strong>
              <ul>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </p>
          </Col>
          <br />
          {/* <div className="col-12"><span className="image fit"><img src={Airport4} alt /></span></div>*/}
        </Row>

        <Row className={uvcStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={UVCWand1} alt />
            </span>
          </Col>

          <Col>
            <span className="image fit">
              <img src={UVCWand2} alt />
            </span>
          </Col>

          <Col>
            <span className="image fit">
              <img src={UVCWand3} alt />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);

export default SectionTwo;
