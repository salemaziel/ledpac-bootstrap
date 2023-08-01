import React from "react";
import { Link } from "gatsby";
import { inner, actions, cta } from "./home.module.css";

import Col from "react-bootstrap/Col";
import Fade from 'react-reveal/Fade';


const SectionCTA = () => (
  <section id="two" className={cta}>
    <Fade bottom>
    <div className={inner}>
      <Col>
        <header>
          <h2>Need an estimate on LED lighting?</h2>
        </header>
        <p>
          {" "}
          For pricing and estimates specific to your project, contact LEDpac
          today
        </p>
      </Col>
      <br />
      <br />
      <Col>
        <ul className={actions}>
          <li>
            <Link to="/contact" className="button big">
              Get An Estimate
            </Link>
          </li>
        </ul>
      </Col>
    </div>
    </Fade>
  </section>
);

export default SectionCTA;
