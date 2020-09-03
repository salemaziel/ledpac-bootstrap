import React from "react";
import Layout from "../../components/layout";

import Page from "../../components/PageComponents/OurWork/Costco/Page";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../../components/seo";



const Costco = () => (
  <SimpleReactLightbox>
    <Layout>
    <SEO title="Led Light Display Costco" />
      <Page />
    </Layout>
  </SimpleReactLightbox>
);
export default Costco;
