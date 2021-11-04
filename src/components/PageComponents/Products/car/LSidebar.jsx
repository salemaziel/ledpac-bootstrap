import React from 'react'
import { Link } from 'gatsby'
import Car4 from '../../../../images/mobile-air-purifier-disinfectant/car-0004_1.jpg'

import { Banner2 } from '../../../../images/index'
import CarSpecSheet from '../../../../assets/Manual R9A-IS_MANUAL_for_car_disinfectant.pdf'
import ResearchReport from '../../../../assets/REPORT tSTUQL21AA0059-1_AAN01247_v1.000.pdf'
import DataTable from '../../../../images/LEDpac_data_percentages-images/0001.jpg'

const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <div className="image fit"><img src={Car4} alt='' /></div>
        <h3></h3>
        <p></p>
        <p></p>
        <footer>
          <ul className="actions">
            <li><a href={CarSpecSheet} rel="noopener noreferrer" className="button" target="_blank">View Spec Sheet</a></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <div className="image fit"><img src={DataTable} alt='LEDpac UVC Covid Research DAta' /></div>
        <h3></h3>
        <p></p>
        <footer>
          <ul className="actions">
            <li><Link to={ResearchReport} rel="noopener noreferrer" className="button">View Full Research Report</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
    </div>
    </>
)

export default LSidebar