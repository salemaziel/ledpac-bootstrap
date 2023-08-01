import React from "react";
import { Link } from "gatsby";
import { Banner, content, inner, actions, LearnButton, Covid } from "./home.module.css";
import ScrollDown from "../../scrollDown"

const Hero = () => (

      <section id="banner" className={Banner}>
        <div className={content}>
          <div className={inner}>
            <header>
              <h2 className={Covid}>{/*The Future of LED Lighting*/}LEDPAC IS COMMITTED TO ERADICATING COVID-19.</h2>
              <p>
              {/*Cutting Edge LED solutions for Industrial, Commercial, Residential, and Medical markets.*/}
              Designing and manufacturing patented disinfectant ultraviolet LED systems.
              </p>
            </header>
            <ul className={actions}>
              <li>
                <Link
                  to="/our-work/covid-19"
                  className={LearnButton}
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
