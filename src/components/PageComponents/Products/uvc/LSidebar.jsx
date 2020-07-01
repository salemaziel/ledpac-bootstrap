import React from 'react'
import { Link } from 'gatsby'

import { Banner2, WholeRoom_1, CloseSurface_1 } from '../../../../images/index'

import UVCSterilizerSpecs from '../../../../assets/UVC_Sterilizer_Specs.pdf'
import DefenderUVC300 from '../../../../assets/Defender_UVC_300W.pdf'


const LSidebar = () => (
    <>
    <div className="sidebar">
      {/*<section>
        <h3>Magna Feugiat</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
        <footer>
          <ul className="actions">
            <li><Link to="#" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />*/}
      <section>
        <div className="image fit"><img src={WholeRoom_1} alt='' /></div>
        <h3>Whole Room UV-C Disinfectants</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><a href={DefenderUVC300} className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <div className="image fit"><img src={CloseSurface_1} alt='' /></div>
        <h3>Close Promixity Surface Disinfectants</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><a href={UVCSterilizerSpecs} className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
      <hr />
      {/*<section>
        <Link to="#" className="image fit"><img src={Banner2} alt='' /></Link>
        <h3>Amet Lorem Tempus</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><Link to="#" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>*/}
    </div>
    </>
)

export default LSidebar