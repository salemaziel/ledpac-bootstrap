import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import AboutPage from '../components/PageComponents/About/AboutPage'

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutPage />

  </Layout>
);

export default About
