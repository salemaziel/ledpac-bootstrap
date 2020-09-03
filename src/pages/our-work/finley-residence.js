import React from "react";
import Layout from "../../components/layout";

import Page from "../../components/PageComponents/OurWork/Finley/Page";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../../components/seo";


const Finley = () => (
  <SimpleReactLightbox>
    <Layout>
    <SEO title="LED Light Residential Display" />

      <Page />
    </Layout>
  </SimpleReactLightbox>
);
export default Finley;
