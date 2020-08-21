import React from "react";
import LSidebar from "./LSidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Covid19Banner,
  OneTwentyEight_1,
  Fifty_1,
  Sixtyfour_1,
  Covid19Masks,
  UVCSpectrum,
  Covid19ReuseMasks,
  Covid19UVMask,
  Covid19Stats_1,
} from "../../../../images/index";

import covidStyles from "./covid19.module.css";
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header
        className="major" /* className={covidStyles.covidHeader}*/ /*style={{padding: '4rem', width: '100%', backgroundSize: 'cover', backgroundPosition: '50% 30%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${Covid19Stats_1})` }}*/
      >
        <Fade left big>
        <h2>Covid 19</h2>
        <p>UltraViolet LED Disinfectant Solutions</p>
        </Fade>
      </header>
      {/* Content */}

      {/*<div className="image fit"><img src={Covid19Stats_1} alt='' /></div>*/}
      <div className={covidStyles.intro}>
      <Fade left big>
        <div className="box alt">
          <Row className={covidStyles.PictureRow}>
            <Col className="image fit">
              <img src={Covid19UVMask} alt="airport" />
            </Col>
            <Col className="image fit">
              <img src={Covid19ReuseMasks} alt="airport" />
            </Col>
            <Col className="image fit">
              <img src={Covid19Masks} alt="airport" />
            </Col>
          </Row>
        </div>
        </Fade>
      </div>
      <Fade left big>
      <div className="content">
        
        <h3>TOGETHER WE CAN KILL COVID-19</h3>
        <p>
          The world has been turned upside down by the COVID-19 pandemic,
          changing the way people live and do business. The virus is highly
          contagious and currently there is no cure.{" "}
        </p>

        <h3>What is unique about this new product?</h3>

        <p>
          The XLT UV-C Microbe Inactivator, which inactivates the RNA of a
          virus, is the secret weapon of LEDpac’s design and will make quick
          disinfection of surfaces possible. Once the approval process is
          complete, the Global Lighting Project stands ready to put it in the
          hands of those on the front lines, including first responders and
          others working to keep the public safe. Proper testing to prove its
          efficacy, however, will be required. And the cost of this extensive
          testing is growing every day in this new arena of virus protection.
        </p>
        <br />
        <div className="box alt">
          <Container>
            <Row className={covidStyles.PictureRow}>
              <Col className="image fit">
                <Link to="/products/ultraviolet-led">
                <img src={OneTwentyEight_1} alt="airport" style={{padding: '2rem'}}/>
                </Link>
              </Col>
              <Col className="image fit">
              <Link to="/products/ultraviolet-led">
                <img  src={Fifty_1} alt="airport" style={{padding: '2rem'}}/>
                </Link>
              </Col>
              <Col className="image fit">
              <Link to="/products/ultraviolet-led">
                <img  src={Sixtyfour_1} alt="airport" style={{padding: '2rem'}} />
                </Link>
              </Col>
            </Row>
            {/* <Row>
                <Col className="image fit">
                  <img src={UVCSpectrum} alt="airport" />
                </Col>
              </Row>*/}
          </Container>
        </div>

        <p>
          LEDPac, LLC has partnered with The Global Lighting Project, a 501 C3
          organization, to offer one of its patented products containing
          Ultraviolet LED diodes that promise to quickly disinfect surfaces
          contaminated with the Covid-19 virus. The design and LED diodes
          contained in this new product exceed CDC requirements for devices that
          can kill COVID-19 in under 4 seconds.{" "}
        </p>

        <h2 style={{ textAlign: "center" }}>WE’RE READY TO HELP. ARE YOU?</h2>
        <Row>
          <Col>
            <div className={covidStyles.covidCTA}>
              <ul className="actions NoDesktop">
                <li>
                  <a
                    href="https://globallightingproject.org/campaigns/covid-19/"
                    className="button NoDesktop"
                    style={{
                      whiteSpace: "normal",
                      lineHeight: "1rem",
                      padding: "1rem",
                      height: "4rem",
                    }}
                  >
                    Learn More About The Global Lighting Project
                  </a>
                </li>
              </ul>
              <ul className="actions NoMobile">
                <li>
                  <a
                    href="https://globallightingproject.org/campaigns/covid-19/"
                    className="button NoMobile"
                    style={{maxWidth: "fit-content"}}
                  >
                    Learn More About The Global Lighting Project
                  </a>
                </li>
              </ul>
              {/*<Button style={{width: '70%'}}>
              <a href="#" style={{whiteSpace: 'normal'}}>2Learn More ABout the global lighting project</a>
            </Button>*/}
            </div>
          </Col>
        </Row>
        {/* <p>
          In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in
          odio vulputate luctus. Suspendisse euismod lorem eget lacinia
          fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam.
          Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.
        </p>
       } <ul>
          <li>Faucibus orci lobortis ac adipiscing integer.</li>
          <li>Col accumsan arcu mi aliquet placerat.</li>
          <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
          <li>Blandit massa non blandit tempor interdum.</li>
          <li>Lacinia mattis arcu nascetur lobortis.</li>
        </ul>*/}
      </div>
      </Fade>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
