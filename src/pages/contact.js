import React from "react";
import Layout from "../components/layout";

import ContactPage from "../components/PageComponents/Contact/ContactPage";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const Contact = () => (
  <Layout>
    {/*<SEO title="Contact LEDpac" />*/}
    <GatsbySeo
title='Contact Us'
description='Contact us to request an estimate or get further information by filling out the form, we will be in touch with you shortly.'
/>

    <ContactPage />
  </Layout>
);
export default Contact;
