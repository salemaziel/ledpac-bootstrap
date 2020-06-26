import React from 'react'

import { 
    Airport1,
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
    Project78,
    ProjectPics1_1,
    SolarLamp1,
    SolarLamp2,
    SolarLamp3,
    CobLighting,


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
      <Row>
      <Col><span className="image fit"><img src={Airport4} alt="airport" /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Airport2} alt="airport" /></span></Col>
      <Col><span className="image fit"><img src={Airport5} alt="airport" /></span></Col>
      <Col><span className="image fit"><img src={Airport3} alt="airport" /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Project57} alt="airport" /></span></Col>
      <Col><span className="image fit"><img src={Project58} alt="airport" /></span></Col>
      <Col><span className="image fit"><img src={Project62} alt="airport" /></span></Col>
      </Row>
      <Row>
      <Col><span className="image fit"><img src={Project71} alt="airport" /></span></Col>
      <Col><span className="image fit"><img src={Project83_1} alt="airport" /></span></Col>
      <Col><span className="image fit"><img src={Project80} alt="airport" /></span></Col>
      </Row>
    </div>
    </Container>
  </div>

  
{/*  <div className="box alt">
  <Container>
    <div className="row gtr-uniform gtr-50">
    <Row>
      <Col><span className="image fit"><img src={Airport4} alt="airport" /></span></Col>
      </Row>
      
      <div className="col-12"><span className="image fit"><img src={Airport2} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Project57} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Project58} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Project62} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Project71} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Project83} alt="airport" /></span></div>
      <div className="col-4"><span className="image fit"><img src={Project80} alt="airport" /></span></div>
    </div>
    </Container>
  </div>
  */}
  <h5>Left &amp; Right</h5>
  <p><span className="image left"><img src={Airport1} alt="airport" /></span>Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.</p>
  <p><span className="image right"><img src={Airport1} alt="airport" /></span>Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna, sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius. Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui.</p>
</section>
</SRLWrapper>
</>
)
  }

export default SectionTwo