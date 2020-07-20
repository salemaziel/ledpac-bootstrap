import React from "react";
import { Link } from "gatsby";
import homeStyles from "./home.module.css";

import Col from "react-bootstrap/Col";


const SectionCTA = () => (
  <section id="two" className={homeStyles.cta}>
    <div className={homeStyles.inner}>
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
        <ul className={homeStyles.actions}>
          <li>
            <Link to="/contact" className="button big">
              Get An Estimate
            </Link>
          </li>
        </ul>
      </Col>
    </div>
  </section>
);

export default SectionCTA;
