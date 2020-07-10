import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import HomgePage from '../components/PageComponents/Home/HomePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <HomgePage />

</Layout>
);

export default IndexPage;
