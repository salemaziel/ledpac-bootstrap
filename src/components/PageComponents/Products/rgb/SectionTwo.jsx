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
import {Link} from 'gatsby'

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
      <Row className={rgbStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={PicG} alt="RGB Grow Light Applications: Hydroponics, horticulture" />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Key Features</strong>
              <ul>
              

                <li>High PPFD output  </li>
                <li>Aesthetic design for the fixture </li>
                <li>50,000 hours life span </li>
                <li>High power led chips </li>
                <li>COB LED Chip with all bands of spectrum</li>
                <li>Superior quality optical lens for lighting </li>
              <li>Individual electrical desiging for each fans &amp; Drivers</li>
              <li>Full spectrum from 380-700NM wavelength</li>
              </ul>
            </p>
          </Col>
          <br />
          {/* <div className="col-12"><span className="image fit"><img src={Airport4} alt /></span></div>*/}
        </Row>



      <div className="row gtr-uniform gtr-50">
                {/*<div className={cobtyles.Cob}>*/}
                <div className={rgbStyles.ProductBox}>
          <Row className={rgbStyles.ProductRow}>
            <Col>
              <h3 className={rgbStyles.ProductTitle}>Spider COB LED Growlights</h3>
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
                <img src={ZeroSix} alt="Crop fields grown with Spider COB LED Growlightss" style={{ margin: "auto" }} />
              </span>
            </Col>
          </Row>
        </div>
      </div>

        <Row>
        <div className="box alt">
          <Row className="">
            <Col className="image fit">
              <img src={ZeroSeven} alt="Spider COB LED Growlights 1" className="cursorPointer"/>
            </Col>
            <Col className="image fit">
              <img src={ZeroFive} alt="Spider COB LED Growlights 2" className="cursorPointer"/>
            </Col>
            <Col className="image fit">
              <img src={SpiderSLP} alt="Spider COB LED Growlights 3" className="cursorPointer"/>
            </Col>
          </Row>
        </div>
        </Row>

        {/*<Row className={rgbStyles.ProductRow}>
        <Col>
        <h3 className={rgbStyles.ProductTitle}>Spider COB LED Growlights</h3>
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
              <img src={RGBGrowRack} alt="RGB Light Grow Rack" />
            </span>
          </Col>
        </Row>*/}
        <Row className={rgbStyles.ProductRow} >
          <Col>
          <ul className="actions">
                  <li>
                    <Link to="/contact"
                      className="button"
                      style={{
                        whiteSpace: "normal",
                        boxShadow: 'inset 0 0 0 2px rgba(144, 144, 144, 0.25)'
                      }}
                    >
                      Contact Us For An Estimate Today
                    </Link>
                  </li>
                </ul>
          </Col>
      </Row>
      </div>
    </div>
  </section>
);

export default SectionTwo;
