import React from "react";
import Layout from "../components/layout";
import OurWorkPage from "../components/PageComponents/OurWork/OurWorkPage";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../components/seo";
import { GatsbySeo } from 'gatsby-plugin-next-seo';



const OurWork = () => (
  <SimpleReactLightbox>
    <Layout>
      {/*<SEO title="Our Work" />*/}
      <GatsbySeo
title='Our Work'
description='View several case studies of LED lighting projects done by LEDpac'
/>

      <OurWorkPage />
    </Layout>
  </SimpleReactLightbox>
);
export default OurWork;
