import React from "react";
//import { Link } from 'gatsby'

//import { Banner2 } from '../../../images/index'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LSidebar = () => (
  <>
    <div className="sidebar">
      <section>
        <h4 className="followus">Email</h4>
        <p className="followus">
          <a href="mailto:jack@ledpac.com">jack@ledpac.com</a>
        </p>
        <h4 className="followus">Follow Us</h4>
        <div className="followus">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <footer></footer>
      </section>
      <hr />
    </div>
  </>
);

export default LSidebar;
