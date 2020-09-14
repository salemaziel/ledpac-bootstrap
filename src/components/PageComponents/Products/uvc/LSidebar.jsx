import React from "react";
//import { Link } from 'gatsby'

import {
  //  Banner2,
  //  WholeRoom_1,
  CloseSurface_1,
  UVDisinfectLamp4,
} from "../../../../images/index";

import UVCSterilizerSpecs from "../../../../assets/UVC_Sterilizer_Specs.pdf";
import DefenderUVC300 from "../../../../assets/Defender_UVC_300W.pdf";
import V4_UVDisinfect from '../../../../assets/v4.3_uv_disinfection_lamp_car_type_a1_specification.pdf'

const LSidebar = () => (
  <>
    <div className="sidebar">
      <section>
        <header>
      <h3>Remote controlled Whole-Room Mobile UV-C LED Disinfectant</h3>
      </header>
        <div className="image fit">
          <img src={UVDisinfectLamp4} alt="UV LED Fixture disinfecting full rooms" />
        </div>
        <div style={{fontSize: '1.2rem', textAlign: 'center'}}> </div>
        <p>
          Products Available Now!
        </p>
        <footer>
          <ul className="actions">
            <li>
              <a href={V4_UVDisinfect} className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
      <hr />
      <section>
      <h3>Close Promixity Surface Disinfectants</h3>

        <div className="image fit">
          <img src={CloseSurface_1} alt="UV LED Fixture disinfecting at short ranges" />
        </div>
        <p>
          Products Available Now!
        </p>
        {/*<p>
          Sed tristique purus vitae volutpat commodo suscipit amet sed nibh.
          Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat
          commodo suscipit ullamcorper sed blandit lorem ipsum dolore.
        </p>*/}
        <footer>
          <ul className="actions">
            <li>
              <a href={UVCSterilizerSpecs} className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
      <hr />
    </div>
  </>
);

export default LSidebar;
