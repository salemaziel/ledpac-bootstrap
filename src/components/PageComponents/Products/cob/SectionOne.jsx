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
        <img src={CobLighting} alt="" className={cobStyles.TopPic} />
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
        {/*
      <h3>No Project Too Large or Too Small</h3>
      <p>LEDpac has North American manufacturing using only quality LEDs, and has developed systems for projects ranging in size from residential kitchens to jewelry cases for large national accounts. No project is too large or too small.</p>
      <h3>Patented Technology</h3>
      <p>LEDpac has submitted more than a dozen products which are currently Patent Pending. One of the first LED companies to submit products under the UL2108 guidelines, LEDpac offers a range of UL listed products and systems using only the finest LEDs available.</p>
      <ul>
        <li>Patented Tech 1</li>
        <li>Patented Tech 2</li>
        <li>Patented Tech 3</li>
        <li>Patented Tech 4</li>
        <li>Patented Tech 5</li>
      </ul>
    */}
      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
