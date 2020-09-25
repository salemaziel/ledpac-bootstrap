import React from "react";
import { Link } from "gatsby";

import {
  Banner2,
  LampMail_1,
  LampMail_2,
  LampMail_3,
  LampMail_4,
  Solarpng
} from "../../../../images/index";

import SolarPNGSpecs from '../../../../assets/F5_20W_40W_60W_solar_street_light.pdf'

const LSidebar = () => (
  <>
    <div className="sidebar">
    <section>
    <h3>SOLAR POWERED LEDS</h3>

        <div className="image fit">
          <img src={Solarpng} alt="" />
        </div>
        {/*<h3>Amet Lorem Tempus</h3>*/}
        <p> Products Available Now!</p>
        <footer>
          <ul className="actions">
            <li>
              <a href={SolarPNGSpecs} target="_blank" rel="noopener noreferrer" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
      <section>
        <div className="image fit">
          <img src={LampMail_1} alt="" />
        </div>

        <p> Products Available Now!.</p>
        <footer>
          {/*<ul className="actions">
            <li>
              <Link to="#" className="button">
                Learn More
              </Link>
            </li>
</ul>*/}
        </footer>
      </section>
      <hr />
      <section>
        <div className="image fit">
          <img src={LampMail_2} alt="" />
        </div>
        {/*<h3>Amet Lorem Tempus</h3>*/}
        <p> Products Available Now!</p>
        <footer>
          {/*<ul className="actions">
            <li>
              <Link to="#" className="button">
                Learn More
              </Link>
            </li>
</ul>*/}
        </footer>
      </section>
      <hr />
    </div>
  </>
);

export default LSidebar;
