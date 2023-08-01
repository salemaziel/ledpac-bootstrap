import React from 'react'
import { Link } from 'gatsby'

import { 
  Banner2,
  RGBGrow1,
  RGBGrow2,
  RGBGrow3,
  SpectrumStripLight
} from '../../../../images/index'


const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
      <h3>LED Grow Light Strips</h3>
        <div className="image fit"><img src={RGBGrow1} alt='' /></div>
        <div className="image fit"><img src={RGBGrow3} alt='' /></div>
        <div className="image fit"><img src={RGBGrow2} alt='' /></div>
        <div className="image fit"><img src={SpectrumStripLight} alt='' /></div>

        <p>Products Available Now!</p>
        <footer>

        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar