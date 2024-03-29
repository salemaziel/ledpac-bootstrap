import React from "react";

import {
  CobNewGen,
  RGBGrow3_1,
  ProjectPics1_1,
  TwentyFive_BlackBG
} from "../../../images/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import { CategoryRow, ProductBox, ProductTitle, } from "./products.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">

        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              {" "}
              <span className="image fit">
              <Link to="/products/ultraviolet-led" >

                <img src={TwentyFive_BlackBG} alt />
                </Link>

              </span>
            </Col>
            <Col>
              <h3 className={ProductTitle}>
                <Link to="/products/ultraviolet-led" >
                UltraViolet (UV) LED
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
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

        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              {" "}
              <span className="image fit">
              <Link to="/products/solar-led" >
                <img src={ProjectPics1_1} alt />
                </Link>
              </span>
            </Col>
            <Col>
              {" "}
              <h3 className={ProductTitle}>
              <Link to="/products/solar-led" >
              Solar Powered LED</Link></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
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

        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <span className="image fit">
              <Link to="/products/rgb-led">
                <img src={RGBGrow3_1} alt />
                </Link>
              </span>
            </Col>
            <Col>
              <h3 className={ProductTitle}><Link to="/products/rgb-led">Spider COB LED Growlights</Link></h3>
              <p>
                RGB Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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



        <div className={ProductBox}>
          <Row className={CategoryRow}>
            <Col>
              <span className="image fit">
                <Link to="/products/nanolite-cob-led">
                  {" "}
                  <img src={CobNewGen} alt="cob leds" />{" "}
                </Link>
              </span>
            </Col>
            <Col>
             
                {" "}
                <h3 className={ProductTitle}> <Link to="/products/nanolite-cob-led">COB LED </Link></h3>{" "}
             
              <p>
                Chip-on-Board LEDs, also known as COBs, are the next and newest
                generation of LED lighting technology{" "}
              </p>
              <ul className="actions">
                <li>
                  <Link to="/products/nanolite-cob-led" className="button">
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
