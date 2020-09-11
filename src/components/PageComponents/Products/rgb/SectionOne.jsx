import React from "react";
//import { Link } from 'gatsby'
import LSidebar from "./LSidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionTwo from "./SectionTwo";
import ProductCards2 from '../ProductCards2'
import SpiderCob from "../../../../assets/Spider-COB-series.pdf";


import {
  //  Airport2,
  RGBGrow3,
  ZeroThree,
  ZeroSeven,
  ZeroSix,
  ZeroFive,
  ZeroFour,
  SpiderSLP,
} from "../../../../images/index";
import { SRLWrapper } from "simple-react-lightbox";


import rgbStyles from "./rgb.module.css";

const SectionOne = () => {
return(
  <SRLWrapper >
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>RGB LED</h2>
      </header>
      {/* Content */}
      <div className="content">
        <h3>LEDpac's High-Output Premium LED RGB</h3>
        <p>
          Premium LED RGB lighting solutions for both commercial and residential
          applications such as: holiday lights, backlit countertops, built-in
          cabinetry, cove lights, architectural features, signage, retail window
          displays, building profiling, and any other custom application.
        </p>

        <ProductCards2
      items={[
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1599862455/ledpac/rgb/rgb-card_euhwjw.png",
          title: "Spider C.O.B. RGB",
          subtitle: "MODEL: XLP 128.30.640",
          body: "Features:",
          link: "/contact",
          specs: SpiderCob,
          feature1 : "Optical lens for protection & lighting diffusion--COB Chips ",
          feature2 : "Suitable height for intallation above plants: 0.3-0.6 m",
          
          feature3 : "Fan and Aluminum Cooling System",
          feature4 : "Ventilation for optimal airflow",
          feature5 : "50,000 hours life span",
          feature6: "PF : > 0.98",
        },
      ]} />

<div className={rgbStyles.Leading}>
          <h3>Spider C.O.B. Series</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="image fit">
          <img src={ZeroThree} alt="" /*className={rgbStyles.TopPic}*/ />
    </div>



        <SectionTwo />
      </div>
      <LSidebar />
    </div>
  </section>
  </SRLWrapper>
);
    }
export default SectionOne;
