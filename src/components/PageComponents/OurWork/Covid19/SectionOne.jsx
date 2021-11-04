import React from "react";
import LSidebar from "./LSidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  OneTwentyEight_1,
  Fifty_1,
  Sixtyfour_1,
  Covid19Masks,
  Covid19ReuseMasks,
  Covid19UVMask,
  GuardianStormBanner3,
  Guardian1,
  Guardian4,
  Guardian6,
} from "../../../../images/index";

import CarPurifier from "../../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-000-square.jpg";
import CarPurifier3 from "../../../../images/mobile-air-purifier-disinfectant/car-disinfectant-pdf.jpg-003.jpg";
import Car1 from "../../../../images/mobile-air-purifier-disinfectant/car-0001.jpg";
import Car9 from "../../../../images/mobile-air-purifier-disinfectant/car-0009.jpg";

import covidStyles from "./covid19.module.css";
import { Link } from "gatsby";
//import Fade from "react-reveal/Fade";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header
        className="major" /* className={covidStyles.covidHeader}*/ /*style={{padding: '4rem', width: '100%', backgroundSize: 'cover', backgroundPosition: '50% 30%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${Covid19Stats_1})` }}*/
      >
        {/*<Fade left big>*/}
        <h2>Covid 19</h2>
        <p>UltraViolet LED Disinfectant Solutions</p>
        {/* </Fade>*/}
      </header>
      {/* Content */}

      {/*<div className="image fit"><img src={Covid19Stats_1} alt='' /></div>*/}

      {/*<Fade left big>*/}
      <div className="content">
        <p>
          The world has been turned upside down by the COVID-19 pandemic,
          changing the way people live and do business. The virus is highly
          contagious and currently there is no cure.{" "}
        </p>
        <p>
          Until Now. LEDpac can eradicate Covid-19 in seconds with patented UV-C
          LED technology.
        </p>
        <h3 className="mb-4 pb-2">
          Introducing LEDpac's New Patented Mobile UVC LED Air Sterilizer
        </h3>
        <br />
        <Container className="mb-5">
          <Row>
            <Col>
              <div className="image fit">
                <img src={Car1} alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="image fit">
                <img src={Car9} alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={CarPurifier} alt="" className="w-100 h-100" />
            </Col>
            <Col>
              <img src={CarPurifier3} alt="" className="w-100 h-100" />
            </Col>
          </Row>
        </Container>
        <Container className="py-3">
          {/*<Row>
            <Col>
              <h3 className="">Title About Car Sterilizer</h3>
              <p>
                Summary of product similar to guardian light summary below.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>*/}
          <Row className="justify-content-center text-center">
            <Col xs={12} md={6}>
              <div className="mb-5 py-5 w-100">
                <Link
                  to="/products/uvc-led-air-purifying-disinfector/"
                  className="button w-100 "
                  style={{ whiteSpace: `nowrap` }}
                >
                  Learn How It Works
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <br />

        <div className="box alt">
          <Container>
            <Row className="mb-3">
              <Col>
                <h3>
                  OTHER INNOVATIONS TO FIGHT COVID-19: GUARDIAN STORM
                  AIR-DISINFECTING LED LIGHT PANELS
                </h3>
              </Col>
            </Row>
            <Row className={covidStyles.PictureRow}>
              <Col className="image fit">
                <Link to="/products/guardian-storm-light">
                  <img
                    src={GuardianStormBanner3}
                    alt="guardian storm LED light"
                  />
                </Link>
              </Col>
            </Row>
            <Row className={covidStyles.PictureRow}>
              <Col className="image fit">
                <Link to="/products/guardian-storm-light">
                  <img
                    src={Guardian1}
                    alt="Guardian Storm Light hanging from cieling"
                  />
                </Link>
              </Col>
              <Col className="image fit">
                <Link to="/products/guardian-storm-light">
                  <img
                    src={Guardian4}
                    alt="Guardian Storm Light on flat surface"
                  />
                </Link>
              </Col>
              <Col className="image fit">
                <Link to="/products/guardian-storm-light">
                  <img src={Guardian6} alt="Guardian Storm Light upright" />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <p>
          Antiseptic and Anti-virus Air Cleaning LED panel light, Antiviral LED
          Panel . This Anti virus LED panel Four-layer filter structure can
          effectively eliminate harmful gases such as indoor harmful bacteria,
          virus and formaldehyde after decorating the house. Now it can help us
          keep away from COVID-19. Once the approval process is complete, the
          Global Lighting Project stands ready to put it in the hands of those
          on the front lines, including first responders and others working to
          keep the public safe.{" "}
        </p>

        <p>
          New Nanometer material, antiseptic and anti-virus air cleaning LED
          panel light, reducing air particles,eliminating indoor TVOC
          concentration, Occupying little space. it’s safety, energy saving and
          long lifetime. Saves 60% power comparing conventional lights.
        </p>
        <h3>What is unique about this new product?</h3>
        <p>
          Guardian Storm Light depends on nanometer materials, such as
          nanosilver and titanium dioxide, to kill the virus and bacteria. UV
          Light is just used to activate the activity of nanosilver and titanium
          dioxide which can easily kill the virus and bacteria. This latest LED
          panel with air circulation works as a regular LED panel light during
          disinfection with the nanosilver and titanium dioxide!
        </p>
        {/*<p>Proper testing to prove its
    efficacy, however, will be required. And the cost of this extensive
    testing is growing every day in this new arena of virus protection.
    </p>*/}
        <br />
        <div className={covidStyles.intro}>
          {/*<Fade left big>*/}
          <div className="box alt">
            <Row className={covidStyles.PictureRow}>
              <Col className="image fit">
                <img
                  src={Covid19UVMask}
                  alt="covid mask, led light, and stethoscope"
                />
              </Col>
              <Col className="image fit">
                <img
                  src={Covid19ReuseMasks}
                  alt="covid masks being disinfected with led light"
                />
              </Col>
              <Col className="image fit">
                <img
                  src={Covid19Masks}
                  alt="disinfecting hanging covid masks with led light"
                />
              </Col>
            </Row>
          </div>
          {/*</Fade>*/}
        </div>

        <h3>
          Other Innovations To Fight Covid-19 part 2: UV LED Anti-Viral Wands
        </h3>

        <div className="box alt">
          <Container>
            <Row className={covidStyles.PictureRow}>
              <Col className="image fit">
                <Link to="/products/ultraviolet-led">
                  <img
                    src={OneTwentyEight_1}
                    alt="airport"
                    style={{ padding: "2rem" }}
                  />
                </Link>
              </Col>
              <Col className="image fit">
                <Link to="/products/ultraviolet-led">
                  <img
                    src={Fifty_1}
                    alt="airport"
                    style={{ padding: "2rem" }}
                  />
                </Link>
              </Col>
              <Col className="image fit">
                <Link to="/products/ultraviolet-led">
                  <img
                    src={Sixtyfour_1}
                    alt="airport"
                    style={{ padding: "2rem" }}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <p>
          The XLT UV-C Microbe Inactivator, which inactivates the RNA of a
          virus, is the secret weapon of LEDpac’s design and will make quick
          disinfection of surfaces possible. Once the approval process is
          complete, the Global Lighting Project stands ready to put it in the
          hands of those on the front lines, including first responders and
          others working to keep the public safe.{" "}
        </p>

        <p>
          LEDpac has created extensive development and research to a series of
          close surface UVC Microbe inactivator wands. Now manufacturing a
          reliable patented Covid-19 killing mechanism.
        </p>
        <p>
          The UV-C Microbe inactivator wands follows strict CDC requirements /
          Boston university testing for the Covid-19 various using UVC LEDs.
          LEDpac far exceeds the required standards, creating A reliable
          patented Covid-19 killing device.
        </p>
        <p>
          The XLT UV-C close surface MiW system can destroy Covid-19 in less
          than 2 seconds.
        </p>
        {/*<p>Proper testing to prove its
            efficacy, however, will be required. And the cost of this extensive
            testing is growing every day in this new arena of virus protection.
            </p>*/}

        <br />
<div className="box alt">
  <Row className="justify-content-center text-center">
        <h3>TOGETHER WE CAN KILL COVID-19</h3>

        <p>
          LEDpac, LLC has partnered with The Global Lighting Project, a 501 C3
          organization, to offer one of its patented products containing
          Ultraviolet LED diodes that promise to quickly disinfect surfaces
          contaminated with the Covid-19 virus. The design and LED diodes
          contained in this new product exceed CDC requirements for devices that
          can kill COVID-19 in under 4 seconds.{" "}
        </p>

        <h2 style={{ textAlign: "center" }}>WE’RE READY TO HELP. ARE YOU?</h2>
          <Col xs={12} md={8} className="mt-5">
                  <a
                    href="https://globallightingproject.org/campaigns/covid-19/"
                    className="button NoDesktop h-auto px-5 py-2" style={{whiteSpace: `normal`, lineHeight: `initial`}}
                  >
                    Learn About<br /> The Global Lighting Project
                  </a>

                  <a
                    href="https://globallightingproject.org/campaigns/covid-19/"
                    className="button NoMobile h-auto px-5 py-3" style={{whiteSpace: `normal`, lineHeight: `initial`}}
                    
                  >
                    Learn About The Global Lighting Project
                  </a>

              {/*<Button style={{width: '70%'}}>
              <a href="#" style={{whiteSpace: 'normal'}}>2Learn More ABout the global lighting project</a>
            </Button>*/}
          </Col>
        </Row>
</div>
      </div>
      {/*</Fade>*/}

      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
