import React from "react";

import {
  Airport1,
  Airport2,
  Airport3,
  Airport4,
  Airport5,
  CobNewGen, CobConnector, CobLedStrip, CobLedStrip2, CobLedStrip3, CobLedStrip4, CobLedStrip5, CobLighting, CobSpecs, CobSpecs2 , RGBAdvantage, RGBGrow1, RGBGrow2, RGBGrow3, RGBGrowRack
} from "../../../../images/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import rgbStyles from "./rgb.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={cobtyles.Cob}>*/}
        <div className={rgbStyles.ProductBox}>
          <Row className={rgbStyles.ProductRow}>
          <Col>
            <h3 className={rgbStyles.ProductTitle}>RGB LED</h3>
            <p>
            LEDpac's high-output premium LED RGB lighting solutions for both commercial and residential applications such as: holiday lights, backlit countertops, built-in cabinetry, cove lights, architectural features, signage, retail window displays, building profiling, and any other custom application..
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
              <img src={RGBGrow2} alt="" style={{margin: 'auto'}} />
            </span>
          </Col>
          </Row>

        </div>
        </div>


        <div className="row gtr-uniform gtr-50">
        <Row className={rgbStyles.ProductRow}>
        <Col>
            <span className="image fit">
              <img src={RGBAdvantage} alt="" />
            </span>
          </Col>

          <Col style={{textAlign: 'left'}}>
            <p>
             <strong> Advantage:</strong>
              <ul>
                <li>
                Lorem ipsum dolor sit amet{" "}
                </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>
                Lorem ipsum dolor sit amet{" "}
                </li>
                <li>
                Lorem ipsum dolor sit amet
                </li>
              </ul>
              <strong>    Specification:</strong>
              <li>Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet</li>
            </p>
          </Col>
          <br />
          {/* <div className="col-12"><span className="image fit"><img src={Airport4} alt /></span></div>*/}


          </Row>


          <Row className={rgbStyles.ProductRow}>

          <Col>
            <span className="image fit">
              <img src={RGBGrowRack} alt />
            </span>
          </Col>

            <Col>
            <span className="image fit">
              <img src={RGBGrow3} alt />
            </span>
            </Col>
          </Row>
          <Row className={rgbStyles.ProductRow} >
          <Col>
            <span className="image fit">
              <img src={CobSpecs2} alt />
            </span>
          </Col>



         <Col>
            <span className="image fit">
              <img src={CobSpecs} alt />
            </span>
          </Col>
          </Row>


        </div>
      </div>
  </section>
);

export default SectionTwo;
