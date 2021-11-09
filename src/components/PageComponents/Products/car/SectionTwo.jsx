import React from "react";


import Car1 from '../../../../images/mobile-air-purifier-disinfectant/car-0001.jpg'
import Car2 from '../../../../images/mobile-air-purifier-disinfectant/car-0002.jpg'
import Car3 from '../../../../images/mobile-air-purifier-disinfectant/car-0003.jpg'
import Car4 from '../../../../images/mobile-air-purifier-disinfectant/car-0004.jpg'
import Car7 from '../../../../images/mobile-air-purifier-disinfectant/car-0007.jpg'
import Car8 from '../../../../images/mobile-air-purifier-disinfectant/car-0008.jpg'
import Car9 from '../../../../images/mobile-air-purifier-disinfectant/car-0009.jpg'
import Car10 from '../../../../images/mobile-air-purifier-disinfectant/car-00010.jpg'
import Car11 from '../../../../images/mobile-air-purifier-disinfectant/car-00011.jpg'
import Car12 from '../../../../images/mobile-air-purifier-disinfectant/car-00012.jpg'
import Car13 from '../../../../images/mobile-air-purifier-disinfectant/car-00013.jpg'

import DataTable from '../../../../images/LEDpac_data_percentages-images/0001.jpg'




import CarPurifier6 from '../../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-006.jpg'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import cobStyles from "./car.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={cobtyles.Cob}>*/}
        <div className={cobStyles.ProductBox}>
          <Row className="w-100 mx-auto my-auto">
            <Col>
              {/*<h3 className={cobStyles.ProductTitle}>A Breath of Fresh Air</h3>*/}
              <p>
                UVC LED Air Purifier and Disinfector you can take anywhere.
                Using a Type C USB port for charging, this device is perfect for
                your car, bedroom, or office.{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="row gtr-uniform gtr-50">
       {/* <Row className={cobStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CobLedStrip4} alt />
            </span>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>
              <strong> Advantage:</strong>
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
              </ul>
              Patented UV-C LED Design UV-C wave frequency 260-280nm, Covering
              the most powerful band for sterilization. Destroys virus DNA and
              RNA.
            </p>
                  </Col>
        </Row>*/}
        <Row className={cobStyles.ProductRow}>
          <Col>
            <span className="image fit">
              <img src={CarPurifier6} alt />
            </span>
          </Col>
          <Col>
            <p>
              <strong> Specifications:</strong>
              <ul>
                <li>Ion: 800Mem3 </li>
                <li>Input: 5V; 2A </li>
                <li>Sound: 30dB/60dB</li>
                <li>Effective Area: 18m3 ＜635 Cubic Feet </li>
                <li>Airflow: 50 m3/h ＜up to 3x Air exchange per/hr.</li>
                <li>Size: H: 200mm, R: 70mm</li>
                <li>Materials: Aluminum + ABS +Glass</li>
                <li>Cable: Type-CL=1000mm</li>
                <li> Model: SLP-UVCLED</li>
              </ul>
            </p>
          </Col>
        </Row>
        <br />
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car1} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car9} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car7} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car8} className="img-fluid" />
          </Col>
        </Row>
        

        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car13} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car12} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car3} className="img-fluid" />
          </Col>
        </Row>

        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car2} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car10} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car11} className="img-fluid" />
          </Col>
        </Row>

        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car4} className="img-fluid" />
          </Col>
        </Row>
        <Row className={cobStyles.ProductRow}>
          <Col>
            <img src={DataTable} className="img-fluid" />
          </Col>
        </Row>
        {/*<Row className={cobStyles.ProductRow}>
          <Col>
            <img src={Car6} className="img-fluid" />
          </Col>
      </Row>*/}






        <Row className={cobStyles.ProductRow} style={{ width: "auto" }}>
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
