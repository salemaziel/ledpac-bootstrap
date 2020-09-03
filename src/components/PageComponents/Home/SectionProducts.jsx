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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                      <img src={RGBGrow3_1} alt="RGB LED Grow Lights" />
                    </Link>
                  </span>
                </Col>
                <Col>
                  <h3 className={productStyles.ProductTitle}>
                    <Link to="/products/rgb-led">RGB LED</Link>
                  </h3>
                  <p>
                    RGB Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                  <p>
                    Chip-on-Board LEDs, also known as COBs, are the next and
                    newest generation of LED lighting technology{" "}
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
