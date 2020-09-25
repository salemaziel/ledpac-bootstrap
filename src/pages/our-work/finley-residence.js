import React from "react";
import Layout from "../../components/layout";

import Page from "../../components/PageComponents/OurWork/Finley/Page";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../../components/seo";

import { GatsbySeo } from 'gatsby-plugin-next-seo';



const Finley = () => (
  <SimpleReactLightbox>
    <Layout>
    {/*<SEO title="LED Light Residential Display" />*/}
    <GatsbySeo
title='Case Study: Residential LED Light Installation'
description='A case study on a residential installation project for a family home by LEDpac'
/>

      <Page />
    </Layout>
  </SimpleReactLightbox>
);
export default Finley;
