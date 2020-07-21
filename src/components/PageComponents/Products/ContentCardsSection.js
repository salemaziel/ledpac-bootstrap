import React from "react";
import Section from "./Section";
import ContentCards from "./ContentCards";


import cardStyles from './products.module.css'


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
        
        <ContentCards
          items={[
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1593125848/ledpac/uvc-wand3_1_jbnob3.jpg",
              title: "UV-C LED Disinfecting Lights",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              link: "/products/ultraviolet-led"
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1593125624/ledpac/project-pictures1_1_yq7nqk.jpg",
              title: "Solar/White LED Lights",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              link: "/products/solar-led"
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1593125632/ledpac/growstrip3_1_bn4e2y.jpg",
              title: "RGB LED Grow Lights",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              link: "/products/rgb-led"
            },
            {
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1593125641/ledpac/cob-new-gen_obpkrv.png",
              title: "Linearal C.O.B. LED Lights",
              body:
                "Chip-on-Board LEDs, also known as COBs, are the next and newest generation of LED lighting technology.",
              link: "/products/chip-on-board-led"
            },
          ]}
        ></ContentCards>
        </div>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
