import React from "react";
//import { Link } from "gatsby";
import LSidebar from "./LSidebar";

import SectionTwo from "./SectionTwo";

import CarPurifier from '../../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-000-square.jpg'
import CarPurifier3 from '../../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-003.jpg'

import Col from 'react-bootstrap/Col'


import cobStyles from "./car.module.css";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>UVC LED Air Purifier &amp; Disinfector</h2>
        {/*<p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
      </header>
      {/* Content */}
      <div className="content">
        <div className="d-flex flex-column flex-md-row">
        <Col>
        <img src={CarPurifier} alt="Mobile UVC LED Air Purifier &amp; Disinfector" className={cobStyles.TopPic} />
        </Col>
        <Col>
        <img src={CarPurifier3} alt="Mobile UVC LED Air Purifier &amp; Disinfector" className={cobStyles.TopPic} />
        </Col>
        </div>
        <div className={cobStyles.Leading}>
          <h3>Leading Through Innovation</h3>
         {/* <p>
            In the rapidly advancing world of SSL technology, LEDpac leads the
            way with superior quality LED solutions. Whether it's retrofit, new
            construction, residential, commercial, or industrial, interior or
            exterior, big or small, LEDpac's suite of SSL solutions is
            consistently the discriminating choice of homeowners, business
            owners, contractors, lighting designers and architects – and has
            been for 10 years.
          </p>*/}
        </div>

        <SectionTwo />

      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
