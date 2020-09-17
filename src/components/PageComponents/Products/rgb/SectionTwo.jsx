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
import { Link } from "gatsby";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        <Row className={rgbStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img
                src={PicG}
                alt="RGB Grow Light Applications: Hydroponics, horticulture"
              />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Key Features</strong>
              <ul>
                <li>High PPFD output </li>
                <li>Aesthetic design for the fixture </li>
                <li>50,000 hours life span </li>
                <li>High power led chips </li>
                <li>COB LED Chip with all bands of spectrum</li>
                <li>Superior quality optical lens for lighting </li>
                <li>
                  Individual electrical desiging for each fans &amp; Drivers
                </li>
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
                <h3 className={rgbStyles.ProductTitle}>
                  {" "}
                  Plant lamp knowledge:
                </h3>
                <p>
                  The influence of light in different wave bands on plant
                  photosynthesis is different. The light needed for plant
                  photosynthesis is about 400nm-700nm, 400nm-500nm (blue) and
                  610nm-720nm (red), which contribute a lot to plant light
                  supplement. When 395 nm-405 nm (UV) violet light lamp is used,
                  it can radiate ultraviolet light, which has strong
                  sterilization function. Purple light in the visual effect, the
                  use of light will appear very weak, in fact, is a normal
                  phenomenon.{" "}
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
                  <img
                    src={ZeroSix}
                    alt="Crop fields grown with Spider COB LED Growlightss"
                    style={{ margin: "auto" }}
                  />
                </span>
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
              <p>
                {" "}
                The most important concept with indoor horticulture is not only
                watch your plants, but to tune into them! Great care must be
                shown when properly acclimating young or new plants to our LED
                grow lights as they are extremely intense.{" "}
              </p>
              <p>
                Remember that with young plants less is more and always make
                sure the leaves are happy and pointing skywards toward the
                light.
              </p>{" "}
              {/*If while acclimating, the leaves show any signs of curling or overall stress, please raise the light until the problem is solved.
                </p>*/}
            </Col>
          </Row>
        </div>

        <Row>
          <div className="box alt">
            <Row className="">
              <Col className="image fit">
                <img
                  src={ZeroSeven}
                  alt="Spider COB LED Growlights 1"
                  className="cursorPointer"
                />
              </Col>
              <Col className="image fit">
                <img
                  src={ZeroFive}
                  alt="Spider COB LED Growlights 2"
                  className="cursorPointer"
                />
              </Col>
              <Col className="image fit">
                <img
                  src={SpiderSLP}
                  alt="Spider COB LED Growlights 3"
                  className="cursorPointer"
                />
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
        <Row className={rgbStyles.ProductRow}>
          <Col>
            <ul className="actions">
              <li>
                <Link
                  to="/contact"
                  className="button"
                  style={{
                    whiteSpace: "normal",
                    boxShadow: "inset 0 0 0 2px rgba(144, 144, 144, 0.25)",
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
