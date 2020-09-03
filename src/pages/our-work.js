import React from "react";
import Layout from "../components/layout";
import OurWorkPage from "../components/PageComponents/OurWork/OurWorkPage";
import SimpleReactLightbox from "simple-react-lightbox";
import SEO from "../components/seo";

const OurWork = () => (
  <SimpleReactLightbox>
    <Layout>
      <SEO title="Our Work" />

      <OurWorkPage />
    </Layout>
  </SimpleReactLightbox>
);
export default OurWork;
