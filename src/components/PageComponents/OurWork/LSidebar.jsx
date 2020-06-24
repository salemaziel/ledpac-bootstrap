import React from 'react'
import { Link } from 'gatsby'

import { Banner2, CobNewGen, RGBGrow3_1,
  ProjectPics1_1,
  UVCWand3, 
  RGBGrow3} from '../../../images/index'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <div>
        <h2>Products</h2>
      </div>
      <section>
      <Link to="/products/chip-on-board-led" className="image fit"><img src={CobNewGen} alt='' /></Link>
        <h3>COB LED</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
        <footer>
          <ul className="actions">
            <li><Link to="/products/chip-on-board-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="/products/rgb-led" className="image fit"><img src={RGBGrow3} alt='' /></Link>
        <h3>RGB LED</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><Link to="/products/rgb-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="/products/solar-led" className="image fit"><img src={ProjectPics1_1} alt='' /></Link>
        <h3>Solar Powered LED</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><Link to="/products/solar-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
        <Link to="/products/ultraviolet-led" className="image fit"><img src={UVCWand3} alt='' /></Link>
        <h3>UltraViolet LED</h3>
        <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
        <footer>
          <ul className="actions">
            <li><Link to="/products/ultraviolet-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>

    </div>
    </>
)

export default LSidebar