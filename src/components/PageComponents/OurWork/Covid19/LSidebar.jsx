import React from 'react'
import { Link } from 'gatsby'

import { Banner2, BostonUni } from '../../../../images/index'
import BostonReport from '../../../../assets/Boston-UV-C-wand-testing-report.pdf'


const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <Link to="#" className="image fit" style={{margin: '2rem 0'}} ><img src={BostonUni} alt='' /></Link>
        <h3>Boston University Study</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><a href={BostonReport} className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar