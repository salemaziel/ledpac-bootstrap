import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import SectionTwo from './SectionTwo'
import ProductCards2 from '../ProductCards2'

import {
  TwentyFive_VertSquare,
  OneTwentyEight_VertSquare,
  Fifty_VertSquare,
  Sixtyfour_VertSquare,
  Sixtyfourzero_VertSquare,
} from "../../../../images/index";
import {Link} from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { 
//  Airport2, 
//UVCWand3, 
UVCSpectrum 
} from '../../../../images/index'

import Fifty from "../../../../assets/R7-50_UV-C_MICROBE_INACTIVATOR.pdf";
import TwentyFive from "../../../../assets/R7-25_UV-C_MICROBE_INACTIVATOR.pdf";
import OneTwentyEight from "../../../../assets/R7-128_UV-C_MICROBE_INACTIVATOR.pdf";
import SixtyFour from "../../../../assets/R7-64_UV-C_MICROBE_INACTIVATOR.pdf";
import SixFourZero from "../../../../assets/R7-640_UV-C_MICROBE_INACTIVATOR_TRACK.pdf";

import uvcStyles from './uvc.module.css'

const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>UltraViolet (UVC) LED</h2>
    </header>
    {/* Content */}
    <div className="content">
      <h3>Hand-held Industrial-Grade UV-C Microorganism Inactivation Wands </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <ProductCards2
      items={[
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951468/ledpac/uvc/128-1000x1000_zaaelc.png",
          title: "128 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
          subtitle: "MODEL: XLP 128.30.640",
          body: "Features:",
          link: "/contact",
          specs: OneTwentyEight,
          feature1 : "Beeping sensor switch",
          feature2 : "Premium UV-C LEDs",
          feature3 : "Expandable design",
          feature4 : "High impact lenses",
          feature5 : "Safety gravity switch",
          feature6 : "USB-C Power input",
        },
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951469/ledpac/uvc/25-500x375_wwbt6p.png",
          title: "25 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
          subtitle: "Model: SLP 25.6.150",
          body: "Features:",
          link: "/contact",
          specs: TwentyFive,
          feature1 : "Beeping sensor switch",
          feature2 : "Premium UV-C LEDs",
          feature3 : "Expandable design",
          feature4 : "High impact lenses",
          feature5 : "Safety gravity switch",
          feature6 : "USB-C Power input",
        },
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951469/ledpac/uvc/50-1000x1000_ik1ntd.png",
          title: "50 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
          subtitle: "MODEL: SLP 50.12.300",
          body: "Features:",
          link: "/contact",
          specs: Fifty,
          feature1 : "Beeping sensor switch",
          feature2 : "Premium UV-C LEDs",
          feature3 : "Expandable design",
          feature4 : "High impact lenses",
          feature5 : "Safety gravity switch",
          feature6 : "USB-C Power input",
        },
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951469/ledpac/uvc/64-1000x1000_n8cfix.png",
          title: "64 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
          subtitle: "MODEL: XLP 128.30.640",
          body: "Features:",
          link: "/contact",
          specs: SixtyFour,
          feature1 : "Beeping sensor switch",
          feature2 : "Premium UV-C LEDs",
          feature3 : "Expandable design",
          feature4 : "High impact lenses",
          feature5 : "Safety gravity switch",
          feature6 : "USB-C Power input",
        },
        {
          image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1598951470/ledpac/uvc/640-1000x1000_shjqql.png",
          title: "640 UltraViolet (UV-C) LED Microorganism Inactivation Wand",
          subtitle: "MODEL: XLP 640.150.3840",
          body: "Features:",
          link: "/contact",
          specs: SixFourZero,
          feature1 : "Beeping sensor switch",
          feature2 : "Premium UV-C LEDs",
          feature3 : "Expandable design",
          feature4 : "High impact lenses",
          feature5 : "Safety gravity switch",
          feature6 : "USB-C Power input",
        },


      ]} />
      <div className={uvcStyles.Leading}>
      <h3>More Information about how UVC Lights work to kill viruses and bacteria</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    {/*<SectionTwo />*/}
      <div className="image fit"><img src={UVCSpectrum} alt='' style={{maxWidth: '70%', margin: 'auto'}} /></div>
      {/*<div className={uvcStyles.Leading}>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>*/}
    <Row className="gtr-uniform gtr-50">
            <Row className={uvcStyles.ProductRow} >
          <Col>
          <ul className="actions">
                  <li>
                    <Link to="/contact"
                      className="button"
                      style={{
                        whiteSpace: "normal",
                        boxShadow: 'inset 0 0 0 2px rgba(144, 144, 144, 0.25)'
                      }}
                    >
                      Contact Us For An Estimate Today
                    </Link>
                  </li>
                </ul>
          </Col>
      </Row>

   </Row>
    </div>
      <LSidebar />
  </div>
</section>

)

export default SectionOne