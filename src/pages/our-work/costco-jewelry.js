import React from "react";
import Layout from "../../components/layout";

import Page from "../../components/PageComponents/OurWork/Costco/Page";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../../components/seo";

import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Costco = () => (
  <SimpleReactLightbox>
    <Layout>
    {/*<SEO title="Led Light Display Costco" />*/}
    <GatsbySeo
title='Case Study: Costco LED Light Display' 
description='A case study on an installation project for a Costco jewelry display by LEDpac'
/>
      <Page />
    </Layout>
  </SimpleReactLightbox>
);
export default Costco;
