import React from "react";
import { Link } from "gatsby";

import { Banner2 } from "../../../images/index";

import ReactPlayer from 'react-player/vimeo'

const LSidebar = () => (
  <>
    <div className="sidebar">
      <section>


        <h3>Connection <br />
        at Indianapolis Airport</h3>
        <ReactPlayer 
      url='https://vimeo.com/9214023'
      width="100%"
      playing="false"
      controls="true"
      loop="true"
      volume="0.2"
      muted="true"
      style={{marginTop: '-17%', verticalAlign: 'top' }}
      />

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
);

export default LSidebar;
