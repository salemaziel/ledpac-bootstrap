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
  GuardianStorm3,
//  CobSpecs,
//  CobSpecs2,
} from "../../../../images/index";

import guardianStyles from "./guardian.module.css";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>Guardian Storm Light</h2>
        {/*<p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
      </header>
      {/* Content */}
      <div className="content">
        <img src={GuardianStorm3} alt="C.O.B. Light Display" className={guardianStyles.TopPic} />
        <div className={guardianStyles.Leading}>
          <h3>Antiseptic and Anti-Virus Air Cleaning LED Light Panel</h3>
          <p>
          Guardian Storm Light is an Antiseptic and Anti-virus Air Cleaning LED panel light, Antiviral LED Panel . This Anti virus LED panel Four-layer filter structure can effectively eliminate harmful gases such as indoor harmful bacteria, virus and formaldehyde as well as decorate the house.</p>
          <p>
          Guardian Storm Light depends on nanometer materials, such as nanosilver and titanium dioxide, to kill the virus and bacteria. UV Light is just used to activate the activity of nanosilver and titanium dioxide which can easily kill the virus and bacteria. This latest LED panel with air circulation works as a regular LED panel light during disinfection with the nanosilver and titanium dioxide!
          </p>
        </div>

        <SectionTwo />

      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
