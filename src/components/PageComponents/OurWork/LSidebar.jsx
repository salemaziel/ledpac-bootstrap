import React from 'react'
import { Link } from 'gatsby'

import { CobNewGen,
  ProjectPics1_1,
  UVDisinfectLamp1, 
  RGBGrow3} from '../../../images/index'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <div>
        {/*<h3>Products</h3>*/}
      </div>
      <section>
      <h3>Nanolite COB LED</h3>
      <Link to="/products/chip-on-board-led" className="image fit"><img src={CobNewGen} alt='' /></Link>

        {/*<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>*/}
        <footer>
          <ul className="actions">
            <li><Link to="/products/chip-on-board-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>Spider COB LED Growlights</h3>
        <Link to="/products/rgb-led" className="image fit"><img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1599862455/ledpac/rgb/rgb-card_euhwjw.png" alt='' /></Link>
        {/*<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>*/}
        <footer>
          <ul className="actions">
            <li><Link to="/products/rgb-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>Solar Powered LED</h3>

        <Link to="/products/solar-led" className="image fit"><img src={ProjectPics1_1} alt='' /></Link>
        {/*<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>*/}
        <footer>
          <ul className="actions">
            <li><Link to="/products/solar-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>UltraViolet LED</h3>

        <Link to="/products/ultraviolet-led" className="image fit"><img src={UVDisinfectLamp1} alt='' /></Link>
        {/*<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>*/}
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