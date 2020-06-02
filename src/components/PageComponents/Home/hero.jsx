import React from "react";
import { Link } from "gatsby";
import YouTube from "react-youtube";
import homeStyles from "./home.module.css";

//const Hero = () => (
class Hero extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    };
    return (
      <section id="banner" className={homeStyles.Banner}>

            <div className={homeStyles.content}>
              <div className={homeStyles.inner}>
                <header>
                  <h2>LEDPac is committed to eradicating COVID-19.</h2>
                  <p>
                    Research and development on patented disinfectant Ultra Violet LED lights.
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
              <div className={homeStyles.videoBackground}>
          <div className={homeStyles.videoForeground}>
            <YouTube
              videoId="1IkY0_qONRk"
              opts={videoOptions}
              className={homeStyles.VideoIframe}
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
