import React from 'react'

import homeStyles from './home.module.css'
import Fade from 'react-reveal/Fade';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7
}
from '../../../images/index'
import {Link} from 'gatsby'


const SectionTwo = () => (
    <section id="three" className={homeStyles.mywrapper}>
    <div className={homeStyles.inner2}>
      <header className="major">
        {/*<h2>Convallis amet interdum</h2>
        <p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
      </header>
      <div className="posts">
        <Fade left big cascade>
        <section className="post">
          <Link to="/about" className="image"><img src={Banner1} alt /></Link>
          <div className="content">
            <h3>MOTION SENSORED LED LIGHTING</h3>
            <p>SMART red and blue LEDS attached to motion sensors inside fixtures that follow you and change colors to speed, this technology has many options available.</p>
            <Link to="/about" className="button" style={{
              minWidth: 'initial'
            }} style={{
              minWidth: 'initial'
            }}>More</Link>
          </div>
        </section>
        <section className="post">
          <Link to="/products/chip-on-board-led" className="image"><img src={Banner2} alt /></Link>
          <div className="content">
            <h3>Premium LED Landscape Solution</h3>
            <p>Perfect continuous LED illumination solutions using NANOlite COB linear systems.</p>
            <Link to="/products/chip-on-board-led" className="button" style={{
              minWidth: 'initial'
            }}>More</Link>
          </div>
        </section>
        <section className="post">
          <Link to="/products/chip-on-board-led" className="image"><img src={Banner3} alt /></Link>
          <div className="content">
            <h3>LEDpac LED Illumination Projects</h3>
            <p>	
LEDpac's RETROfit solutions for both low and high ceiling downlighting designed for entryways, hallways, stairwells, kitchens, home movie theatres, studios, game rooms and more..</p>
            <Link to="/products/chip-on-board-led" className="button" style={{
              minWidth: 'initial'
            }}>More</Link>
          </div>
        </section>
        <section className="post">
          <Link to="/products/chip-on-board-led" className="image"><img src={Banner4} alt /></Link>
          <div className="content">
            <h3>NANOlite COB Indoor LEd Lighting</h3>
            <p>Chip-on-Board LEDs, also known as COBs, are the next and newest generation of LED technology for indoor lighting.</p>
            <Link to="/products/chip-on-board-led" className="button" style={{
              minWidth: 'initial'
            }}>More</Link>
          </div>
        </section>
        <section className="post">
          <Link to="/products/chip-on-board-led" className="image"><img src={Banner5} alt /></Link>
          <div className="content">
            <h3>EXTERIOUR OUTDOOR LED LIGHTING</h3>
            <p>Premium low-voltage high-lumen LED solutions for submersible and above grade outdoor landscape applications such as: fountains, ponds, reflecting pools, outdoor step-lighting, patio bar counters, exterior architectural features and more.</p>
            <Link to="/products/chip-on-board-led" className="button" style={{
              minWidth: 'initial'
            }}>More</Link>
          </div>
        </section>
        <section className="post">
          <Link to="/products/chip-on-board-led" className="image"><img src={Banner6} alt /></Link>
          <div className="content">
            <h3>Interior LED illumination</h3>
            <p>LEDpac's Linear and Flexible solutions give premium long-living light to architectural features, soffits, step lighting, bar counters, built-in cabinetry, and more.</p>
            <Link to="/products/chip-on-board-led" className="button" style={{
              minWidth: 'initial'
            }}>More</Link>
          </div>
        </section>
        </Fade>
      </div>
    </div>
  </section>

)

export default SectionTwo