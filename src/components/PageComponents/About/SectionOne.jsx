import React from "react";
import { Link } from "gatsby";
import LSidebar from "./LSidebar";

import { Banner2 } from "../../../images/index";
import Vimeo from "@u-wave/react-vimeo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import Fade from "react-reveal/Fade";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <Container>
      {/*<div className="inner">*/}
      <header className="major">
        {/*<Fade left cascade>*/}
        <h2>About LEDpac</h2>
        {/*</Fade>*/}
      </header>
      {/* Content */}
      <div className="content">
        {/*<Fade left big>*/}
        <div className="image fit">
          {/*<img src={Banner2} alt='' />*/}

          <Vimeo
            video="9214023"
            autoplay
            width="100%"
            controls={true}
            muted={true}
            start={25}
            loop={true}
            responsive
          />
        </div>

        <h3>Who We Are</h3>
        <p>
          LEDpac is an innovative LED company designing products and systems for
          economical and functional application. Founded in 2000, LEDpac has
          developed products for application in interior coves, cabinets,
          display cases, signage, downlights, landscape lights and many other
          applications.
        </p>
        <p>
          In 2010 LEDpac expanded their product offering to include a broad list
          of new lamp replacement products including MR16, PAR20, PAR30, BR30
          and PAR38 shapes. New, more efficient LED modules in many of the
          original LEDpac product line has allowed for more effective light
          distribution and up to 75% higher light output from the same original
          package.
        </p>
        <p>
          Now in 2020, LEDpac has pivoted to UV-C LED disinfectant products to
          help fight the novel coronavirus.
        </p>
        <h3>No Project Too Large or Too Small</h3>
        <p>
          LEDpac has North American manufacturing using only quality LEDs, and
          has developed systems for projects ranging in size from residential
          kitchens to jewelry cases for large national accounts. No project is
          too large or too small.
        </p>
        <h3>Patented Technology</h3>
        <p>
          LEDpac has 4 patents in LED technology, with 12 additional patents
          pending. One of the first LED companies to submit products under the
          UL2108 guidelines, LEDpac offers a range of UL listed products and
          electronic systems using only the finest LEDs available.
        </p>
        {/*</Fade>*/}
        <Row>
          <Col style={{ justifyContent: "center", display: "flex" }}>
            <ul className="actions">
              <li>
                <Link to="/contact" class="button" target="_blank">
                  Contact Us For An Estimate Today
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      {/*<LSidebar />*/}
      {/*</div>*/}
    </Container>
  </section>
);

export default SectionOne;
