import React from "react";

import {
  CobNewGen,
  CobConnector,
  CobLedStrip,
  //  CobLedStrip2,
  //  CobLedStrip3,
  CobLedStrip4,
  CobLedStrip5,
  //  CobLighting,
  CobSpecs,
  CobSpecs2,
  GuardianStorm1,
  GuardianStorm2,
  GuardianStorm4,
  GuardianStorm5,
  GuardianStorm6,
  GuardianStorm7,
  GuardianStorm8,
  GuardianStorm9,
  GuardianStorm10,
  GuardianStormBanner2,
  GuardianStormBanner3,
  GuardianIllustration1,
  GuardianIllustration2,
  GuardianIllustration3,
  Guardian6,
  Guardian4


} from "../../../../images/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from 'gatsby'

import guardianStyles from "./guardian.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={cobtyles.Cob}>*/}
        <div className={guardianStyles.ProductBox}>
          <Row className={guardianStyles.ProductRow}>
            <Col>
              <h3 className={guardianStyles.ProductTitle}>Nano Material and UV LED Light</h3>
              <p>
            New Nanometer material, antiseptic and anti-virus air cleaning LED panel light, reducing air particles, eliminating indoor TVOC concentration, occupying little space. LM more than 100lm/W,CRI more than 80,stable quality, long lifetime and no UV IR emission. 
            </p>
            </Col>
            <Col>
              <span className="image fit">
                <img src={GuardianStorm10} alt />
              </span>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row gtr-uniform gtr-50">
        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={GuardianIllustration3} alt />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>

            <p>
            The anodized die-cast aluminum house with heat dissipating design and a reflector treated by anodic oxidation, combine in the lamp to give it a high luminous efficiency powered by low voltage constant current driver. 
            </p>
            <h3> Safe, energy saving and long lifetime.</h3>
            <p>
            It saves 60% power compared to conventional lighting, making it a great choice for industrial &amp; commercial lighting solutions.
              {/*<strong> Advantage:</strong>
              <ul>
                <li>
                  Higher efficiency rate and lower failure rates. (reduce 25% of
                  heat){" "}
                </li>
                <li>High-intensity, particularly at close distances </li>
                <li>High-uniformity, even at close working distances </li>
                <li>
                  Design simplicity, only 1 circuit and 2 contacts are required{" "}
                </li>
                <li>
                  Superior thermal Performance, increased lifetime, stability
                  and reliability
                </li>
                  </ul>*/}
            </p>
          </Col>
        </Row>



        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={GuardianStorm9} alt />
            </span>
          </Col>
          <Col>
            <p>
              <strong> Specifications:</strong>
              <ul>
                <li>Size: 598mm x 598mm x 120mm </li>
                <li>Wattage: 50W (LED panel 40W, Fan 10w) </li>
                <li>Input: AC220-250V/ 50-60Hz, AC100-265V /50-60Hz
                </li>
                <li>Driver: TUV, CE Approved, no flicker </li>
                <li>Lumens: 4000lm</li>
                <li>CRI: 80</li>
                <li>LGP: PMMA</li>
                <li>CCT: 3000k, 4000k, 5000k, 6000k</li>
                <li>Noise: 40db</li>
                <li>Weight: 6.5KGS</li>
                <li>Fan Speed: 1700-1900 times per minute</li>
                <li>Anti-Biosis, Anti-Viral, Eliminates indoor formaldehyde, benzene, toluene, xylene, ammonia, TVO concentrations, and more </li>
                <li>Functions 24 hours a day, light on or off </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={Guardian4} alt />
            </span>
          </Col>

          <Col>
            <span className="image fit">
              <img src={Guardian6} alt />
            </span>

          </Col>
        </Row>

        <br />
        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={GuardianStorm8} alt />
            </span>

          </Col>
        </Row>

        {/* <div className="col-12"><span className="image fit"><img src={Airport4} alt /></span></div>*/}

        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={GuardianStorm5} alt />
            </span>
          </Col>

        </Row>
        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={GuardianStorm7} alt />
            </span>

          </Col>
        </Row>



        <Row className={guardianStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={GuardianStormBanner2} alt />
            </span>
          </Col>
        </Row>

        <Row className={guardianStyles.ProductRow}>
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
