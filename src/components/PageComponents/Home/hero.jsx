import React from "react";
import { Link } from "gatsby";
import homeStyles from "./home.module.css";

const Hero = () => (

      <section id="banner" className={homeStyles.Banner}>
        <div className={homeStyles.content}>
          <div className={homeStyles.inner}>
            <header>
              <h2>LEDPac is committed to eradicating COVID-19.</h2>
              <p>
                Research and development on patented disinfectant Ultra Violet
                LED lights.
              </p>
            </header>
            <ul className={homeStyles.actions}>
              <li>
                <Link
                  to="/projects/covid-19"
                  className={homeStyles.LearnButton}
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    );


export default Hero;
