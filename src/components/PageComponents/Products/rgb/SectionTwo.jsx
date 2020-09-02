import React from "react";

import {
  RGBAdvantage,
  //  RGBGrow1,
  RGBGrow2,
  RGBGrow3,
  RGBGrowRack,
  ZeroOne,
  ZeroTwo,
  ZeroFour,
  ZeroFive,
  ZeroSix,
  ZeroSeven,
  SpiderSLP,
  PicG,
} from "../../../../images/index";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                LEDpac's high-output premium LED RGB lighting solutions for both
                commercial and residential applications such as: holiday lights,
                backlit countertops, built-in cabinetry, cove lights,
                architectural features, signage, retail window displays,
                building profiling, and any other custom application..
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
                <img src={ZeroSix} alt="" style={{ margin: "auto" }} />
              </span>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row gtr-uniform gtr-50">
        <Row className={rgbStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={PicG} alt="" />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Advantage:</strong>
              <ul>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
              <strong> Specification:</strong>
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
        <h3 className={rgbStyles.ProductTitle}>RGB LED</h3>
              <p>
                LEDpac's high-output premium LED RGB lighting solutions for both
                commercial and residential applications such as: holiday lights,
                backlit countertops, built-in cabinetry, cove lights,
                architectural features, signage, retail window displays,
                building profiling, and any other custom application..
              </p>
          </Col>


          <Col>
            <span className="image fit">
              <img src={RGBGrowRack} alt />
            </span>
          </Col>
        </Row>
        <Row className={rgbStyles.ProductRow} >
          <Col>
          <ul className="actions">
                  <li>
                    <a
                      href="https://globallightingproject.org/campaigns/covid-19/"
                      className="button"
                      style={{
                        whiteSpace: "normal",
                        boxShadow: 'inset 0 0 0 2px red'
                      }}
                    >
                      Contact Us For An Estimate Today
                    </a>
                  </li>
                </ul>
          </Col>
      </Row>
      </div>
    </div>
  </section>
);

export default SectionTwo;
