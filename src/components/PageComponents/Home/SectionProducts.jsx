import React from "react";

import {
  CobNewGen,
  RGBGrow3_1,
  ProjectPics1_1,
  TwentyFive_BlackBG,
} from "../../../images/index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import productStyles from "../Products/products.module.css";

import Fade from 'react-reveal/Fade';



const SectionProducts = () => (
  <section>
    <Container>
      <div className={productStyles.Content}>
        <div className="box alt">
          <div className="row gtr-uniform gtr-50">
            {/*<div className={productStyles.Cob}>*/}
            <Fade left big cascade>
            <div className={productStyles.ProductBox}>
              <Row className={productStyles.CategoryRow}>
                <Col>
                  {" "}
                  <span className="image fit">
                    <Link to="/products/ultraviolet-led">
                      <img src={TwentyFive_BlackBG} alt="UV LED Lights" />
                    </Link>
                  </span>
                </Col>
                <Col>
                  <h3 className={productStyles.ProductTitle}>
                    <Link to="/products/ultraviolet-led">
                      UltraViolet (UV) LED
                    </Link>
                  </h3>
                  <p>
                  <strong>NEW</strong> LEDpac UV-C  XLP Microbe inactavitor. A patented,close-surface handheld wand, eradicates Covid-19 in seconds at the push of a button.{" "}
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/products/ultraviolet-led" className="button">
                        Learn More
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>{" "}
            </div>

            <br />

            <div className={productStyles.ProductBox}>
              <Row className={productStyles.CategoryRow}>
                <Col>
                  {" "}
                  <span className="image fit">
                    <Link to="/products/solar-led">
                      <img src={ProjectPics1_1} alt="Solar Powered LED Lights" />
                    </Link>
                  </span>
                </Col>
                <Col>
                  {" "}
                  <h3 className={productStyles.ProductTitle}>
                    <Link to="/products/solar-led">Solar Powered LED</Link>
                  </h3>
                  <p>
                  New hi powered solar LED illumination breakthrough. Now a totally reliable with quick illumination powered by the sun, Lighting the darkness through the night using super-efficient White LEDs.{" "}
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/products/solar-led" className="button">
                        Learn More
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>{" "}
            </div>

            <br />

            <div className={productStyles.ProductBox}>
              <Row className={productStyles.CategoryRow}>
                <Col>
                  <span className="image fit">
                    <Link to="/products/rgb-led">
                      <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1599862455/ledpac/rgb/rgb-card_euhwjw.png" alt="RGB LED Grow Lights" />
                    </Link>
                  </span>
                </Col>
                <Col>
                  <h3 className={productStyles.ProductTitle}>
                    <Link to="/products/rgb-led">RGB LED</Link>
                  </h3>
                  <p>
                  New cob RGB LED  grow light systems allowing the best color spectrum closest to the sunlight and make plants grow faster night and day underground.{" "}
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/products/rgb-led" className="button">
                        Learn More
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            <br />

            <div className={productStyles.ProductBox}>
              <Row className={productStyles.CategoryRow}>
                <Col>
                  <span className="image fit">
                    <Link to="/products/chip-on-board-led">
                      {" "}
                      <img src={CobNewGen} alt="cob leds" />{" "}
                    </Link>
                  </span>
                </Col>
                <Col>
                  {" "}
                  <h3 className={productStyles.ProductTitle}>
                    {" "}
                    <Link to="/products/chip-on-board-led">COB LED </Link>
                  </h3>{" "}
                 {/* <p>
                    Chip-on-Board LEDs, also known as COBs, are the next and
                    newest generation of LED lighting technology{" "}
                  </p>*/}
                  <p>
                  Chip on board the newest innovation in linearal LED lighting, continuous bright consistant LED illumination throught entire product.{" "}
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/products/chip-on-board-led" className="button">
                        Learn More
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            </Fade>

          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default SectionProducts;
