import React from "react";
//import { Link } from 'gatsby'

//import { Banner2 } from '../../../images/index'


import {
  FaFacebook,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

const LSidebar = () => (
  <>
    <div className="sidebar">
      <section>
        <h4 className="followus">Email</h4>
        <p className="followus">
          <a href="mailto:info@ledpac.com">info@ledpac.com</a>
        </p>
        <h4 className="followus">Follow Us</h4>
        <div className="followus">
          <a href="https://twitter.com" rel="nofollow">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" rel="nofollow">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" rel="nofollow">
            <FaFacebook />
          </a>
        </div>
        <footer></footer>
      </section>
      <hr />
    </div>
  </>
);

export default LSidebar;
