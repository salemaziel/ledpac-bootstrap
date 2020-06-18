import React from "react";

import {
  Airport1,
  Airport2,
  Airport3,
  Airport4,
  Airport5,
} from '../../../../images/index';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

import solarStyles from "./solar.module.css";

const SectionTwo = () => (
  <section>
    <div className="box alt">
      <div className="row gtr-uniform gtr-50">
        {/*<div className={solarStyles.Cob}>*/}
        <div className={solarStyles.ProductBox}>
          <div className="col-5">
            <span className="image fit">
              <img src={Airport2} alt />
            </span>
          </div>
          <div className="col-7">
            <h3 className={solarStyles.ProductTitle}>COB LED</h3>
            <p>
              Chip-on-Board LEDs, also known as COBs, are the next and newest
              generation of LED lighting technology{" "}
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className={solarStyles.ProductBox}>
          <div className="col-5">
            <span className="image fit">
              <img src={Airport2} alt />
            </span>
          </div>
          <div className="col-7">
            <h3 className={solarStyles.ProductTitle}>RGB LED</h3>
            <p>
              The new generation of LED light Chip-on-Board LEDs, also known as
              COBs, are the next and newst generation of LED lighting{" "}
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className={solarStyles.ProductBox}>
          <div className="col-5">
            <span className="image fit">
              <img src={Airport2} alt />
            </span>
          </div>
          <div className="col-7">
            <h3 className={solarStyles.ProductTitle}>Solar Powered LED</h3>
            <p>
              The new generation of LED light Chip-on-Board LEDs, also known as
              COBs, are the next and newst generation of LED lighting{" "}
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className={solarStyles.ProductBox}>
          <div className="col-5">
            <span className="image fit">
              <img src={Airport2} alt />
            </span>
          </div>
          <div className="col-7">
            <h3 className={solarStyles.ProductTitle}>UltraViolet (UV) LED</h3>
            <p>
              The new generation of LED light Chip-on-Board LEDs, also known as
              COBs, are the next and newst generation of LED lighting{" "}
            </p>
            <ul className="actions">
              <li>
                <Link to="#" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
        </div>

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
