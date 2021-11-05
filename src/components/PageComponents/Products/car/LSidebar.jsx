import React from 'react'
//import { Link } from 'gatsby'
import Car4 from '../../../../images/mobile-air-purifier-disinfectant/car-0004_1.jpg'


//import { Banner2 } from '../../../../images/index'
import CarSpecSheet from '../../../../assets/Manual R9A-IS_MANUAL_for_car_disinfectant.pdf'
//import ResearchReport from '../../../../assets/REPORT tSTUQL21AA0059-1_AAN01247_v1.000.pdf'
import DataTable from '../../../../images/LEDpac_data_percentages-images/0001.jpg'
import DataTable2 from '../../../../images/LEDpac_data_percentages-images/research-data-table.jpg'

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
        <div className="image fit"><img src={DataTable} alt='LEDpac UVC Covid Research Data table' /></div>
        <div className="image fit"><img src={DataTable2} alt='LEDpac UVC Covid Research Data table 2' /></div>
        <h3></h3>
        <p></p>
        <footer>
          <ul className="actions">
            <li><a           
              type="button"
          style={{ transition: 'all .15s ease' }}
          href="#mailgo"
          data-address="info"
          data-domain="ledpac.com"
          data-subject="Request to access full UV-C Research Report"
          target="_blank"
          rel="noopener noreferrer"
          className="button">Request Full Research Report</a></li>
          </ul>
        </footer>
      </section>
      <hr />
    </div>
    </>
)

export default LSidebar