import React from "react";

import {
  Airport1,
  Airport2,
  CobNewGen,
  Airport4,
  Airport5,
  RGBGrow3_1,
  ProjectPics1_1,
  UVCWand3
} from "../../../images/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import productStyles from "./products.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={productStyles.Cob}>*/}
        <div className={productStyles.ProductBox}>
          <Row className={productStyles.CategoryRow}>
          <Col>
            <span className="image fit">
             <Link to="/products/chip-on-board-led"> <img src={CobNewGen} alt="cob leds" /> </Link>
            </span>
          </Col>
          <Col>
          <Link to="/products/chip-on-board-led">    <h3 className={productStyles.ProductTitle}>COB LED</h3> </Link>
            <p>
              Chip-on-Board LEDs, also known as COBs, are the next and newest
              generation of LED lighting technology{" "}
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
              <img src={RGBGrow3_1} alt />
            </span>

          </Col>
          <Col>
            <h3 className={productStyles.ProductTitle}>RGB LED</h3>
            <p>
              RGB Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  {" "}
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
          <Col>            <span className="image fit">
              <img src={ProjectPics1_1} alt />
            </span>
          </Col>
          <Col>            <h3 className={productStyles.ProductTitle}>Solar Powered LED</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. {" "}
            </p>
            <ul className="actions">
              <li>
                <Link to="/products/solar-led" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
            </Col>
          </Row>        </div>

        <br />

        <div className={productStyles.ProductBox}>
        <Row className={productStyles.CategoryRow}>
          <Col>            <span className="image fit">
              <img src={UVCWand3} alt />
            </span>
            </Col>
          <Col>
            <h3 className={productStyles.ProductTitle}>UltraViolet (UV) LED</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. {" "}
            </p>
            <ul className="actions">
              <li>
                <Link to="/products/ultraviolet-led" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
            </Col>
          </Row>        </div>

        <br />


        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>* /}
        {/*</div>** /}
        <br />
        <hr />
        <br />
        {/*<div className={productStyles.Cob}>* /}
        <div className="col-6">
          <h3 className={productStyles.ProductTitle}>RGB LED</h3>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>* /}
        {/*</div>** /}

        <br />
        <hr />
        <br />
        {/*<div className={productStyles.Cob}>* /}
        <div className="col-12">
          <h3 className={productStyles.ProductTitle}>Solar Powered LED</h3>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>*/}
        {/*</div>**/}

        {/*<div className={productStyles.Cob}>* /}
        <div className="col-12">
          <h3 className={productStyles.ProductTitle}>UltraViolet (UV) LED</h3>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        {/*<div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>*/}
        {/*</div>** /}

        <div className="col-12">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>

        <div className="col-4">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport3} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport3} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport2} alt />
          </span>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={Airport5} alt />
          </span>
        </div>*/}
      </div>
    </div>
  </section>
);

export default SectionTwo;
