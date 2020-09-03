import React from "react";
//import { Link } from "gatsby";
import LSidebar from "./LSidebar";

import SectionTwo from "./SectionTwo";

import { Finley8 } from "../../../../images/index";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>Finley Residence</h2>
        <p></p>
      </header>
      {/* Content */}
      <div className="content">
        <div href="#" className="image fit">
          <img src={Finley8} alt="Onyx countertop LED light display" />
        </div>
        <h3>Onyx Countertop</h3>
        <p>
          LEDpac was invited to help solve the challenge of backlighting a solid
          onyx countertop for a new home project. The challenge for LEDpac was
          to develop a way to reliably light the countertop at the Malaga, the
          new home development project for Steve and Amy Finley in northern San
          Diego County.{" "}
        </p>

        <br />
        <h3>What was the initial customer request?</h3>
        <p>
          They needed a solution for a 5 by 10 foot countertop in the kitchen
          that Mrs. Amy Finley wanted to light up from underneath. The counter
          material is a 1900-pound Onyx counter which had to be backed with
          Acrylic to support the weight. The extreme weight of the counter meant
          that it would be very difficult to service the backlight. So a
          reliable and long lasting lighting solution needed to be found. LEDpac
          was invited in to develop a solution.
        </p>
        <p>
          LEDpac engineered the complete backlight illumination for this design.
        </p>

        <SectionTwo />


      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
