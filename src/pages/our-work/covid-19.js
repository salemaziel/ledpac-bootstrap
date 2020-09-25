import React from "react";
import Layout from "../../components/layout";

import Page from "../../components/PageComponents/OurWork/Covid19/Page";
import SEO from "../../components/seo";

import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Covid19 = () => (
  <Layout>
      {/*<SEO title="UV LED Light Disinfectant" />*/}
      <GatsbySeo
title='Covid-19 Response: UV LED Disinfectant systems'
description='LEDpac, LLC has partnered with The Global Lighting Project, a 501 C3 organization, to offer one of its patented products containing Ultraviolet LED diodes that promise to quickly disinfect surfaces contaminated with the Covid-19 virus.'
/>

    <Page />
  </Layout>
);
export default Covid19;
