import React from "react";

import {
  CobNewGen,
  ProjectPics1_1,
  GuardianStorm1
} from "../../../images/index";

import CarPurifier from '../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-003.jpg'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import { Content, ProductBox, CategoryRow, ProductTitle } from "../Products/products.module.css";

import Fade from "react-reveal/Fade";

const SectionProducts = () => (
  <section>
    <Container>
      <div className={Content}>
        <div className="box alt">
          <div className="row gtr-uniform gtr-50">
            <Fade bottom cascade>
            <div className={ProductBox}>
                <Row className={CategoryRow}>
                  <Col>
                    <span className="image fit">
                      <Link to="/products/uvc-led-air-purifying-disinfector/">
                        {" "}
                        <img src={CarPurifier} alt="guardian storm light LEDs" />
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    {" "}
                    <h3 className={ProductTitle}>
                      {" "}
                      <Link to="/products/uvc-led-air-purifying-disinfector/">
                      Mobile UVC LED Air Purifier &amp; Disinfector{" "}
                      </Link>
                    </h3>{" "}
                    <p>
                      <strong>NEW</strong> UVC LED Air Purifier and Disinfector you can take anywhere. Using a Type C USB port for charging, this device is perfect for your car, bedroom, or office.{" "}
                    </p>
                    <ul className="actions">
                      <li>
                        <Link
                          to="/products/uvc-led-air-purifying-disinfector/"
                          className="button"
                        >
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
                      <Link to="/products/guardian-storm-light">
                        {" "}
                        <img src={GuardianStorm1} alt="guardian storm light LEDs" />
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    {" "}
                    <h3 className={ProductTitle}>
                      {" "}
                      <Link to="/products/guardian-storm-light">
                      Guardian Storm Light Antiviral LED Panel{" "}
                      </Link>
                    </h3>{" "}
                    <p>
                      <strong>NEW</strong> This Anti virus LED panel Four-layer filter structure can effectively eliminate harmful gases such as indoor harmful bacteria, virus and formaldehyde.
                      This latest LED panel with air circulation works as a regular LED panel light during disinfection with the nanosilver and titanium dioxide!{" "}
                    </p>
                    <ul className="actions">
                      <li>
                        <Link
                          to="/products/guardian-storm-light"
                          className="button"
                        >
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
                    {" "}
                    <span className="image fit">
                      <Link to="/products/ultraviolet-led">
                        <img
                          src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600366553/ledpac/uvc/UVC_hrz8w9.jpg"
                          alt="UV LED Lights"
                        />
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    <h3 className={ProductTitle}>
                      <Link to="/products/ultraviolet-led">
                        UltraViolet (UV) LED
                      </Link>
                    </h3>
                    <p>
                      <strong>NEW</strong> LEDpac patented UV-C XLP Microbe
                      inactivator with close-surface handheld wand technology.
                      Eradicate Covid-19 in seconds at the push of a button.{" "}
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
                      <Link to="/products/solar-led">
                        <img
                          src={ProjectPics1_1}
                          alt="Solar Powered LED Lights"
                        />
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    {" "}
                    <h3 className={ProductTitle}>
                      <Link to="/products/solar-led">Solar Powered LED</Link>
                    </h3>
                    <p>
                      <strong>NEW</strong> HiP solar LED illumination
                      breakthrough with bright reliable adjustable illumination,
                      powered by the sun. Lighting the darkness through the
                      night using super-efficient white LEDs.{" "}
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
                        <img
                          src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600918845/ledpac/rgb/rgb-card_pgvi7c.png"
                          alt="Spider COB LED Growlights Lights"
                        />
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    <h3 className={ProductTitle}>
                      <Link to="/products/rgb-led">
                        Spider COB LED Growlights
                      </Link>
                    </h3>
                    <p>
                      <strong>NEW</strong> Spider RB LED Grow light systems,
                      allowing the best color spectrum closest to the sun.
                      Plants grow stronger faster night and day indoors.{" "}
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
                        <img src={CobNewGen} alt="NANOlite cob leds" />{" "}
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    {" "}
                    <h3 className={ProductTitle}>
                      {" "}
                      <Link to="/products/nanolite-cob-led">
                        NANOlite COB LED{" "}
                      </Link>
                    </h3>{" "}

                    <p>
                      <strong>NEW</strong> COB Innovation in linear LED
                      lighting, NANOlite. Continuous, bright, reliable LED
                      illumination through entire product. Pure white or warm
                      white with continuous illumination LED technology.{" "}
                    </p>
                    <ul className="actions">
                      <li>
                        <Link
                          to="/products/nanolite-cob-led"
                          className="button"
                        >
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
                      <Link to="/products/">
                        {" "}
                        <img
                          src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600990210/ledpac/Logo-dark_r5kknc.png"
                          alt="Water purification with UV LEDs"
                        />{" "}
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    {" "}
                    <h3 className={ProductTitle}>
                      {" "}
                      <Link to="/products/">UV-C LED Water Disinfectant </Link>
                    </h3>{" "}

                    <p>
                      <strong>COMING SOON</strong> Watch for the new HiP UV-C
                      ultraviolet water disinfectant purification system.
                      (Coming 2021) eradicating most viruses including Covid-
                      19! This compact system will be charged by the sun and or
                      generated low voltage energy. Portable and smart water
                      disinfection in record-breaking time.{" "}
                    </p>

                  </Col>
                </Row>
              </div>

              <br />

              <div className={ProductBox}>
                <Row className={CategoryRow}>
                  <Col>
                    <span className="image fit">
                      <Link to="/products/">
                        {" "}
                        <img
                          src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600990210/ledpac/Logo-dark_r5kknc.png"
                          alt="222nm Far UVC Led Lights Coming Soon"
                        />{" "}
                      </Link>
                    </span>
                  </Col>
                  <Col>
                    {" "}
                    <h3 className={ProductTitle}>
                      {" "}
                      <Link to="/products/">222NM Far UVC Lights </Link>
                    </h3>{" "}

                    <p>
                      <strong>COMING SOON</strong> Watch for the new 222NM Far UV-C
                      LED Light system. (Coming 2021)
                    </p>
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
