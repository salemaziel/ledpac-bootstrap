import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import HomgePage from '../components/PageComponents/Home/HomePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <HomgePage />

</Layout>
);

export default IndexPage;
