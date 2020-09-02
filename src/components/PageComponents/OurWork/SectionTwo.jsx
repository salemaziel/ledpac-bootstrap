import React from 'react'

import { 
//    Airport1,
    Airport2,
    Airport3,
    Airport4,
    Airport5,
    Project57,
    Project58,
    Project62,
    Project71,
    Project83_1,
    Project80,
//    Project78,
//    ProjectPics1_1,
//    SolarLamp1,
//    SolarLamp2,
//    SolarLamp3,
//    CobLighting,
    Finley1,
    Finley10,
//    Finley11,
    Finley12,
    Finley13,
//    Finley14,
//    Finley15,
//    Finley16,
//    Finley17,
//    Finley18,
    Finley19,
//    Finley2,
//    Finley20,
//    Finley24,
//    Finley25,
    Finley26,
//    Finley27,
//    Finley28,
//    Finley29,
//    Finley3,
//    Finley30,
//    Finley31,
//    Finley32,
//    Finley4,
//    Finley5,
//    Finley6,
    Finley7,
    Finley8,
    Finley9,

} from '../../../images/index'
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'

 import { SRLWrapper } from "simple-react-lightbox";

 const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "rgba(179, 175, 143, 0.8)",
    showFullscreenButton: "true"
  },
  caption: {
    captionFontFamily: "Montserrat, sans-serif",
    captionFontSize: "22px",
    captionColor: "#8D99AE",
    captionFontWeight: 300,
    showCaption: true
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
    hideControlsAfter: false
  },
  progressBar: {
    height: "3px",
    fillColor: "#8D99AE",
    backgroundColor: "rgba(43, 45, 66, 0.95)"
  },
  thumbnails: {
    thumbnailsSize: ["150px", "100px"],
    thumbnailsGap: "0 5px"
  }
};

const SectionTwo = () => {
  return(
  <>
  <SRLWrapper options={options}>
<section>
<div className="box alt">
  <Container>
    <div className="row gtr-uniform gtr-50">
      <hr />
      <br />


      <Row>
      <Col><span className="image fit"><img src={Airport2} alt="airport" style={{cursor: 'pointer'}} /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Airport4} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Airport5} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Airport3} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Project57} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project58} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project62} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Project71} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project83_1} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Project80} alt="airport"style={{cursor: 'pointer'}} /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Finley10} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley12} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley13} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Finley8} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley1} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley19} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Finley26} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley9} alt="airport" style={{cursor: 'pointer'}}/></span></Col>
      <Col><span className="image fit"><img src={Finley7} alt="airport"style={{cursor: 'pointer'}} /></span></Col>
      </Row>
    </div>
    </Container>
  </div>

    </section>
</SRLWrapper>
</>
)
  }

export default SectionTwo