import React from "react";

import Layout from "../../components/layout";
import RgbPage from "../../components/PageComponents/Products/rgb/RgbPage";
import SEO from "../../components/seo";
import SimpleReactLightbox from "simple-react-lightbox";

import { GatsbySeo } from "gatsby-plugin-next-seo";

const RGB = () => (
  <SimpleReactLightbox>
    <Layout>
      {/*<SEO title="Spider COB LED Growlights Lights" />*/}
      <GatsbySeo
        title="Spider COB LED Growlights Lights"
        description="Premium COB LED RBi GROWLIGHTS solutions for both commercial and residential gardening."
      />

      <RgbPage />
    </Layout>
  </SimpleReactLightbox>
);

export default RGB;
