import React from "react";
import { Link } from "gatsby";
import { FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa'

import {
  LogoLight
} from '../../images/index'

import footerStyles from "./footer.module.css";

const Footer = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.inner}>
            <section className={footerStyles.about}>
              {/*<h3>Button to specific link</h3>*/}
              {/*<p>
               A link to something specific that someone may be looking for on your website.
              </p>*/}
              {/*<ul className={footerStyles.actions}>
                <li>
                  <a href="#" className={footerStyles.button}>
                    Link to thing
                  </a>
                </li>
            </ul>*/}
            <div className="image fit">
              <img src={LogoLight} alt="LEDpac logo" className={footerStyles.FooterLogo} />
            </div>
            </section>
            <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Get In Touch</h3>
              <li className={footerStyles.Social}>
              <a href="mailto:info@ledpac.com"><FaEnvelope /></a>
                  <a href="https://facebook.com"><FaFacebook /></a> 
                  <a href="https://linkedin.com"><FaLinkedin /></a>

              </li>
            </ul>
            </div>
          </div>
        </div>
        <p className={footerStyles.copyright}>
        LEDpac © All rights reserved.
          </p>

      </footer>
    );
;
export default Footer;
