import React from "react";
import Section from "../Products/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../Products/SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Clients
          items={[
            {
              name: "Luminus",
              image: "https://res.cloudinary.com/dexdumfqy/image/upload/v1600901029/ledpac/uvc/luminus-transparent_z1fcag.png",
              width: "300px",
            },

          ]}
        />
      </Container>
    </Section>
  );
}

export default ClientsSection;
