import React from 'react'

import { mywrapper, inner2 } from './home.module.css'
import Fade from 'react-reveal/Fade';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
}
from '../../../images/index'
import {Link} from 'gatsby'


const SectionTwo = () => (
    <section id="three" className={mywrapper}>
    <div className={inner2}>
      <header className="major">

      </header>
      <div className="posts">
        <Fade bottom cascade>
        <section className="post">
        
          <Link to="/about" rel="preload" className="image"><img src={Banner1} alt="Motion sensor LEDs" /></Link>
          <div className="content">
            <Link to="/about" rel="preload">
            <h3>MOTION SENSORED LED LIGHTING</h3></Link>
            <p>SMART RB LEDS attached to motion sensors inside custom fixtures that follow your moment fast or slow changing colors at the same time. This technology is one of our staple systems, allowing many technical options for many future availability’s.</p>

          </div>
        </section>
        <section className="post">
          <Link to="/products/nanolite-cob-led" rel="preload" className="image"><img src={Banner2} alt="Premium outdoor LED solutions" /></Link>
          <div className="content">
          <Link to="/products/nanolite-cob-led" rel="preload">
            <h3>Premium LED Landscape Solution</h3></Link>
            <p>Perfect continuous LED illumination solutions using NANOlite COB linear systems.</p>

          </div>
        </section>
        <section className="post">
          <Link to="/products/nanolite-cob-led" rel="preload"  className="image"><img src={Banner3} alt="Indoor LED solutions for entryways, hallways, stairwells, and more" /></Link>
          <div className="content">
          <Link to="/products/nanolite-cob-led" rel="preload" >
            <h3>LEDpac LED Illumination Projects</h3></Link>
            <p>	
LEDpac's RETROfit solutions for both low and high ceiling downlighting designed for entryways, hallways, stairwells, kitchens, home movie theatres, studios, game rooms and more.</p>

          </div>
        </section>
        <section className="post">
        <Link to="/products/nanolite-cob-led" rel="preload" className="image"><img src={Banner4} alt="NANOlite COB Indoor Lighting" /></Link>
          <div className="content">
          <Link to="/products/nanolite-cob-led" rel="preload">
            <h3>NANOlite COB Indoor LED Lighting</h3></Link>
            <p>Chip-on-Board LEDs, also known as COBs, are the next and newest generation of LED technology for indoor lighting.</p>

          </div>
        </section>
        <section className="post">
        <Link to="/products/nanolite-cob-led" rel="preload"  className="image"><img src={Banner5} alt="Exterior LED Lighting" /></Link>
          <div className="content">
          <Link to="/products/nanolite-cob-led" rel="preload">
            <h3>EXTERIOUR OUTDOOR LED LIGHTING</h3></Link>
            <p>Premium low-voltage high-lumen LED solutions for submersible and above grade outdoor landscape applications such as: fountains, ponds, reflecting pools, outdoor step-lighting, patio bar counters, exterior architectural features and more.</p>

          </div>
        </section>
        <section className="post">
        <Link to="/products/nanolite-cob-led" rel="preload"  className="image"><img src={Banner6} alt="Interior LED Illumination" /></Link> 
          <div className="content">
          <Link to="/products/nanolite-cob-led" rel="preload" >
            <h3>Interior LED illumination</h3></Link>
            <p>LEDpac's Linear and Flexible solutions give premium long-living light to architectural features, soffits, step lighting, bar counters, built-in cabinetry, and more.</p>

          </div>
        </section>
        </Fade>
      </div>
    </div>
  </section>

)

export default SectionTwo