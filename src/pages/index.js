import React from "react";
import Layout from "../components/layout";
//import SEO from "../components/seo";
import { GatsbySeo } from 'gatsby-plugin-next-seo';



import HomgePage from "../components/PageComponents/Home/HomePage";

const IndexPage = () => (
  <Layout>
    {/*<SEO title="LEDpac, LLC" />*/}
    <GatsbySeo
      title='Lighting Solutions for San Diego County'
      description='San Diego County Distributor of Cutting Edge LED Technology including UV-C Disinfectant, Solar Powered, RGB, and ChipOnBoard LED'
    />
    <HomgePage />
  </Layout>
);

export default IndexPage;
