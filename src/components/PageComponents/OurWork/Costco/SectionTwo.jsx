import React from "react";

import {
  CostcoBefore,
  CostcoAfter,
  CostcoGlare,
  CostcoNoGlare,
  Airport5,
  Airport1,
  Project57,
  Project58,
  Project62,
  Project71,
  Project83_1,
  Project80,
  Project78,
  ProjectPics1_1,
  SolarLamp1,
  SolarLamp2,
  SolarLamp3,
  CobLighting,
} from "../../../../images/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "rgba(179, 175, 143, 0.8)",
    showFullscreenButton: "true",
  },
  caption: {
    captionFontFamily: "Montserrat, sans-serif",
    captionFontSize: "22px",
    captionColor: "#8D99AE",
    captionFontWeight: 300,
    showCaption: true,
  },
  settings: {
    overlayColor: "rgba(43, 45, 66, 0.95)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "slide",
    disablePanzoom: true,
    disableWheelControls: true,
    autoplaySpeed: 5000,
    hideControlsAfter: false,
  },
  progressBar: {
    height: "3px",
    fillColor: "#8D99AE",
    backgroundColor: "rgba(43, 45, 66, 0.95)",
  },
  thumbnails: {
    thumbnailsSize: ["150px", "100px"],
    thumbnailsGap: "0 5px",
  },
};

const SectionTwo = () => {
  return (
    <>
      <SRLWrapper options={options}>
        <section>
          <div className="box alt">
            <Container>
              <Row>
                <Col>
                  <span className="image fit">
                    <img src={CostcoBefore} alt="airport" />
                  </span>
                </Col>
              </Row>
            </Container>
          </div>

          <h3>Amplified Depth</h3>
          <p>
            <span className="image left">
              <img src={CostcoGlare} alt="airport" />
            </span>
            In the original design, the single downlight creates a flat,
            uninteresting light on the top of the case. Glare from the glass
            makes viewing product through the glass more difficult. There is a
            single shadow and little depth to the lighting. Additionally, when a
            customer bends over to look into the case, they have the chance of
            blocking the lighting from above. The LEDpac LED case lighting kit
            is from the inside front edge of the case, making it impossible to
            block the lighting from overhead, and giving a general wash of
            lighting to the whole case. The lighting also creates a series of
            shadows which increase the depth and interest of the lighting,
            providing shadow and contrast in various ways on products which are
            displayed. In addition, the existing overhead lighting illuminates
            the perimeter metal banding of the case, thus reducing contrast,
            while the internal LED case lighting leaves the perimeter metal in
            darkness, increasing the contrast of the brighter product to the
            darker surrounding case.
          </p>
          <p>
            <span className="image right">
              <img src={CostcoNoGlare} alt="airport" />
            </span>
            <h3>Improved Color of Light</h3>
            LEDpac chose a specific LED color blend which has a unique quality
            of light. The increased color temperature of the light source
            provides a cooler light which is more flattering to the typical
            diamond. Warmer light tends to make the typical diamond or other gem
            stone more yellow and less clear in appearance. The cooler light
            makes the product more white which is psychologically more "clear."
            The current trend toward white metals tends to be complimented more
            by the cooler light sources. Unlike the halogen lamps in the
            original display, the LEDs emit no UV energy, thus decreasing the
            fading of products and display backgrounds.
          </p>
        </section>
      </SRLWrapper>
    </>
  );
};

export default SectionTwo;
