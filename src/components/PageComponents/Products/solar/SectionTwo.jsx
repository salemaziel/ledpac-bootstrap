import React from "react";

import {
  SolarLamp1,
  SolarLamp2,
  SolarLamp3,
  SolarSpecs1,
//  ProjectPics1,
  ProjectPics1_1
} from "../../../../images/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import { Link } from "gatsby";
import {Link} from 'gatsby'

//import DisplayPDF from './displaypdf'

import solarStyles from "./solar.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={cobtyles.Cob}>*/}
        <div className={solarStyles.ProductBox}>
          <Row className={solarStyles.ProductRow}>
            <Col>
              <h3 className={solarStyles.ProductTitle}>Solar Powered White LED Area Lights</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
            </Col>
            <Col>
              <span className="image fit">
                <img src={SolarLamp3} alt />
              </span>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row gtr-uniform gtr-50">
        <Row className={solarStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={SolarLamp2} alt />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Features:</strong>
              <ul>
                <li>Beam angle:120 degrees. </li>
                <li>
                  Aluminum die-casting heat sinks for optimal heat dissipation.{" "}
                </li>
                <li>
                  Green, energy saving (70~80%)., long and reliable life of 50,000 hours.{" "}
                </li>
                <li>
                  No RF interference, No IR/UV radiation ,no mercury pollution.
                </li>
                <li>
                  Wide colour availability in degrees Kelvin(K),2700-6700K.{" "}
                </li>
                <li>Beautiful streamline exterior design </li>
                <li>
                  Special circuit design, each LED work separately, avoiding the
                  single broken LED influence problem (WHICH IS..?).
                </li>
              </ul>
              <strong>Application:</strong>
              <ul>
              <li>Area roadway/roadway lighting.</li>
              <li>Parking areas lighting. </li>
              <li>Airports lighting. </li>
              <li>Streetscapes lighting.</li>
              <li>Campuses lighting.</li>
             {/* <strong> Specification:</strong>
              <li>Voltage: 24VDC, Cutable length: 5cm </li>
              <li>Power: 15W/M </li>
              <li>Light Efficiency: 100LM/W </li>
              <li>Width:10MM </li>
             <li>Package: 5M/reel.</li>*/}
             </ul>
            </p>
          </Col>
          <br />
          {/* <div className="col-12"><span className="image fit"><img src={Airport4} alt /></span></div>*/}
        </Row>
       {/* <Row>
          <Col>
             <DisplayPDF />
          </Col>
       </Row>*/}

        <Row className={solarStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={SolarSpecs1} alt="" />
            </span>
          </Col>

        </Row>
        <Container>
        <Row className={solarStyles.ProductRow}>


          <Col>
            <span className="image fit">
              <img src={SolarLamp1} alt />
            </span>
          </Col>
          <Col>
            <span className="image fit">
              <img src={ProjectPics1_1} alt />
            </span>
          </Col>


        </Row>
        </Container>
        <Row className={solarStyles.ProductRow} >
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
