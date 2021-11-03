import React from 'react'
import { Link } from 'gatsby'

import { Banner2, PowerDimMag550 } from '../../../../images/index'

//import PowerDimSpecSheet from '../../../../assets/24POWERdim4060100-JD-R7.pdf'

const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <Link to="#" className="image fit"><img src={PowerDimMag550} alt='' /></Link>
        <h3></h3>
        <p></p>
        <p></p>
        <footer>
          <ul className="actions">
            <li><a href="#" rel="noopener noreferrer" className="button" /*target="_blank"*/>Learn More</a></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <h3></h3>
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