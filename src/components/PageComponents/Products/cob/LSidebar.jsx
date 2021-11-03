import React from 'react'
import { Link } from 'gatsby'

import { Banner2, PowerDimMag550 } from '../../../../images/index'

import PowerDimSpecSheet from '../../../../assets/24POWERdim4060100-JD-R7.pdf'

const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <Link to="#" className="image fit"><img src={PowerDimMag550} alt='' /></Link>
        <h3>Power Supplies</h3>
        <p>LEDpac's 40W-60W-100W POWERdims are premium quality Hi intensity dimmable drivers for 120V hardwire applications. Standard 12VDC or 12VAC output with built-in EMI filter and voltage protection breaker. </p>
        <p>12VAC format for RETROfit MR16 systems are also available, as well as 120V J-Box with  EZ top mounting clips. ETL listed with a 5 year warranty. Applications: 120VAC hardwire installations, all Linear and Flexible, RETROfit and RETROtrac LEDpac products.</p>
        <footer>
          <ul className="actions">
            <li><a href={PowerDimSpecSheet} rel="noopener noreferrer" className="button" target="_blank">Learn More</a></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <h3>Color Changing LEDs</h3>
        <p></p>
        <footer>
          <ul className="actions">
            <li><Link to="#" rel="noopener noreferrer" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
    </div>
    </>
)

export default LSidebar