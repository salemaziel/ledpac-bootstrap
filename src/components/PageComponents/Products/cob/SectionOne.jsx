import React from "react";
//import { Link } from "gatsby";
import LSidebar from "./LSidebar";

import SectionTwo from "./SectionTwo";

import {
//  CobNewGen,
//  CobConnector,
//  CobLedStrip,
//  CobLedStrip2,
//  CobLedStrip3,
//  CobLedStrip4,
//  CobLedStrip5,
  CobLighting,
//  CobSpecs,
//  CobSpecs2,
} from "../../../../images/index";

import cobStyles from "./cob.module.css";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>COB LEDs</h2>
        {/*<p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
      </header>
      {/* Content */}
      <div className="content">
        <img src={CobLighting} alt="C.O.B. Light Display" className={cobStyles.TopPic} />
        <div className={cobStyles.Leading}>
          <h3>Leading Through Innovation</h3>
          <p>
            In the rapidly advancing world of SSL technology, LEDpac leads the
            way with superior quality LED solutions. Whether it's retrofit, new
            construction, residential, commercial, or industrial, interior or
            exterior, big or small, LEDpac's suite of SSL solutions is
            consistently the discriminating choice of homeowners, business
            owners, contractors, lighting designers and architects – and has
            been for 10 years.
          </p>
        </div>

        <SectionTwo />

      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
