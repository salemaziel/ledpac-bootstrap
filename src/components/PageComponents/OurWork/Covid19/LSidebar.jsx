import React from 'react'
//import { Link } from 'gatsby'

import { BostonUni, Coronavirus } from '../../../../images/index'
//import BostonReport from '../../../../assets/Boston-UV-C-wand-testing-report.pdf'
import UVCWandsReportsBoston from '../../../../assets/UV-C_wand_reports_merged_Boston.pdf'

import UVCWandsReportsJapan from '../../../../assets/UV-C_wand_reports_merged_Japan-1.pdf'
import { Col } from 'react-bootstrap'

const LSidebar = () => (
    <>
    <div className="sidebar">

    <section>
      <Col xs={10} md={12}>
        <div className="image fit" style={{margin: '2rem 0'}}><img src={Coronavirus} alt='' /></div>
        <h3>Rapid Inactivation of SARS-CoV-2 with deep-UV [UV-C] LED Irradiation</h3>
        <p>Researchers from the University of Miyazaki, Japan successfully demonstrate that irradiation with ultraviolet LEDs at wavelengths of 280 ± 5 nm can rapidly inactivate the SARS-CoV-2 virus that causes Covid-19. </p>
        {/*<p>Hiroko Inagaki, Akatsuki Saito, Hironobu Sugiyama, Tamaki Okabayashi &amp; Shouichi Fujimoto (2020) 9:1, 1744-1747, DOI: 10.1080/22221751.2020.1796529 </p>*/}
        <footer>
          <ul className="actions">
            <li><a href={UVCWandsReportsJapan} rel="noopener noreferrer" target="_blank" className="button">Learn More</a></li>
          </ul>
        </footer>
        </Col>
      </section>
       <hr />

      <section>
      <Col xs={10} md={12}>
        <div className="image fit" style={{margin: '2rem 0'}} ><img src={BostonUni} alt='' /></div>
        <h3>UltraViolet wavelength range confirmed to kill Covid 19.</h3>
        <p>Researchers at Boston University tested UV-C LEDs and confirmed their ability to kill Covid-19. LEDpac complies to Boston University with UV-C close surface wands.</p>
        <footer>
          <ul className="actions">
            <li><a href={UVCWandsReportsBoston} rel="noopener noreferrer" target="_blank" className="button">Learn More</a></li>
          </ul>
        </footer>
        </Col>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar