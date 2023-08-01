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
      <Link to="/products/nanolite-cob-led" className="image fit"><img src={CobNewGen} alt='' /></Link>

        <footer>
          <ul className="actions">
            <li><Link to="/products/nanolite-cob-led" className="button">Learn More</Link></li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>Spider COB LED Growlights</h3>
        <Link to="/products/rgb-led" className="image fit"><img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600918845/ledpac/rgb/rgb-card_pgvi7c.png" alt='' /></Link>

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