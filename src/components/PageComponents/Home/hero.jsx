import React from "react";
import { Link } from "gatsby";
import homeStyles from "./home.module.css";
import ScrollDown from "../../scrollDown"

const Hero = () => (

      <section id="banner" className={homeStyles.Banner}>
        <div className={homeStyles.content}>
          <div className={homeStyles.inner}>
            <header>
              <h2 className={homeStyles.Covid}>LEDpac is committed to eradicating COVID-19.</h2>
              <p>
              Designing and manufacturing patented disinfectant ultraviolet LED systems.
              </p>
            </header>
            <ul className={homeStyles.actions}>
              <li>
                <Link
                  to="/our-work/covid-19"
                  className={homeStyles.LearnButton}
                >
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
          <ScrollDown />

        </div>
      </section>
    );


export default Hero;
