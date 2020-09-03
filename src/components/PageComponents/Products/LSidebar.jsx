import React from 'react'
import { Link } from 'gatsby'

import { Banner2 } from '../../../images/index'


const LSidebar = () => (
    <>
    <div className="sidebar">

      <section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <h3>Amet Lorem Tempus</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><Link to="#" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <h3>Amet Lorem Tempus</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><Link to="#" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar