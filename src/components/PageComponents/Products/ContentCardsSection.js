import React from "react";
import Section from "./Section";
import ContentCards from "./ContentCards";


import cardStyles from './products.module.css'

import Fade from 'react-reveal/Fade'


function ContentCardsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <div className={cardStyles.CardContainer}>
        <div style={{margin: 'auto', padding: '0'}}>
        {/*<Fade left big>*/}
        <ContentCards
          items={[
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600366553/ledpac/uvc/UVC_hrz8w9.jpg",
              title: "UV-C LED Disinfecting Lights",
              body:
                "NEW LEDpac UV-C  XLP Microbe inactivator. A patented ,close-surface handheld wand, eradicates Covid-19 in seconds at the push of a button.",
              link: "/products/ultraviolet-led"
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1593125624/ledpac/uvc/project-pictures1_1_yq7nqk.jpg",
              title: "Solar/White LED Lights",
              body:
                "Solar-powered LED illumination. Quick illumination powered by the sun, Lighting the darkness through the night using super-efficient White LEDs.",
              link: "/products/solar-led"
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1599862455/ledpac/rgb/rgb-card_euhwjw.png",
              title: "Spider COB LED Growlights Lights",
              body:
                "New Spider COB LED Growlights  grow light systems allowing the best color spectrum closest to the sunlight and make plants grow faster night and day underground.",
              link: "/products/rgb-led"
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1593125641/ledpac/cob/cob-new-gen_obpkrv.png",
              title: "NANOlite C.O.B. LED Lights",
              body:
                "Chip on board the newest innovation in linearal LED lighting, continuous bright consistant LED illumination throught entire product.",
              link: "/products/chip-on-board-led"
            },
          ]}
        ></ContentCards>
        {/*</Fade>*/}
        </div>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
