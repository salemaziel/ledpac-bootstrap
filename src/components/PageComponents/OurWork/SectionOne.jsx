import React from "react";
import LSidebar from "./LSidebar";
import SectionTwo from "./SectionTwo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WorkCards1 from "./workCards1";
import CovidCard from "./covidCard";


const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>Our Work</h2>
      </header>
      <div className="" style={{ width: "100%", marginBottom: "2em" }}>
        <CovidCard />
      </div>
      <br />
      <br />

      {/* Content */}
      <div className="content">
        <Row>
          <Col>
            <h3>
              Projects by LEDpac
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              In the rapidly advancing world of SSL technology, LEDpac leads the
              way with superior quality LED solutions. Whether it's retrofit,
              new construction, residential, commercial, or industrial, interior
              or exterior, big or small, LEDpac's suite of SSL solutions is
              consistently the discriminating choice of homeowners, business
              owners, contractors, lighting designers and architects – and has
              been for 10 years.
            </p>
          </Col>
        </Row>
        <WorkCards1 />

        <hr />
        <br />
        <h2>Photo Gallery</h2>
        <SectionTwo />

        <br />
        <hr />
        <br />
      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
