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
                  <strong>NEW</strong> LEDpac patented UV-C XLP Microbe inactivator with close-surface handheld wand technology. Eradicate Covid-19 in seconds at the push of a button {" "}
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
                  <strong>NEW</strong> HiP solar LED illumination breakthrough with bright reliable adjustable illumination, powered by the sun. Lighting the darkness through the night using super-efficient white LEDs.{" "}
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
                      <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1599862455/ledpac/rgb/rgb-card_euhwjw.png" alt="Spider COB LED Growlights Lights" />
                    </Link>
                  </span>
                </Col>
                <Col>
                  <h3 className={productStyles.ProductTitle}>
                    <Link to="/products/rgb-led">Spider COB LED Growlights</Link>
                  </h3>
                  <p>
                  <strong>NEW</strong> Spider RB LED Grow light systems, allowing the best color spectrum closest to the sun. Plants grow stronger faster night and day indoors.{" "}
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
                    <Link to="/products/chip-on-board-led">NANOlite COB LED </Link>
                  </h3>{" "}
                 {/* <p>
                    Chip-on-Board LEDs, also known as COBs, are the next and
                    newest generation of LED lighting technology{" "}
                  </p>*/}
                  <p>
                  <strong>NEW</strong> COB Innovation in linear LED lighting, NANOlite. Continuous, bright, reliable LED illumination through entire product. Pure white or warm white with continuous illumination LED technology.{" "}
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
        <Link to="/products/chip-on-board-led">UV-C LED Water Disinfectant </Link>
      </h3>{" "}
     {/* <p>
        Chip-on-Board LEDs, also known as COBs, are the next and
        newest generation of LED lighting technology{" "}
      </p>*/}
      <p>
      <strong>COMING SOON</strong> Watch for the new HiP UV-C ultraviolet water disinfectant purification system. (Coming 2021) eradicating most viruses including Covid- 19! This compact system will be charged by the sun and or generated low voltage energy. Portable and smart disaffecting water in record breaking time.{" "}
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
