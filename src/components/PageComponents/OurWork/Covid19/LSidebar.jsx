import React from 'react'
import { Link } from 'gatsby'

import { Banner2, BostonUni } from '../../../../images/index'
import BostonReport from '../../../../assets/Boston-UV-C-wand-testing-report.pdf'
import UVCWandsReportsBoston from '../../../../assets/UV-C_wand_reports_merged_Boston.pdf'


const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <div className="image fit" style={{margin: '2rem 0'}} ><img src={BostonUni} alt='' /></div>
        <h3>UltraViolet wavelength range confirmed to kill Covid 19</h3>
        <p>Researchers at Boston University tested UV-C LEDs and confirmed their ability to kill Covid-19. LEDpac complies to Boston University with UV-C close surface wands.</p>
        <footer>
          <ul className="actions">
            <li><a href={UVCWandsReportsBoston} target="_blank" className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar