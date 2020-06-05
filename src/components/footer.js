import React from "react";
import { Link } from "gatsby";


import footerStyles from "./footer.module.css";

const Footer = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div className="content">
          <div className="inner">
            <section className="about">
              <h3>Integer vitae sed feugiat</h3>
              <p>
                Lorem ipsum dolor sit amet interdum mollis sapien. Sed amet ac
                lorem ipsum interdum tempus sagittis lorem tempus.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
            <ul className="icons bulleted">
              <li className="icon solid fa-map-marker-alt">
                <h3>Address</h3>
                <p>
                  LEDPac
                  <br />
                  1234 Fictional Road
                  <br />
                  Escondido, CA 92025
                </p>
              </li>
            </ul>
            <ul className="icons bulleted">
              <li className="icon solid fa-phone">
                <h3>Phone</h3>
                <p>(000) 000-0000</p>
              </li>
              <li className="icon solid fa-envelope">
                <h3>Email</h3>
                <p>
                  <a href="#">info@ledpac.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          © LEDPac. All rights reserved.
          <br />
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <Link to="/contact">Contact</Link>
        </p>

      </footer>
    );

export default Footer;
