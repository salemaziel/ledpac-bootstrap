import React from "react";
import Layout from "../components/layout";

import ProductsPage from "../components/PageComponents/Products/ProductsPage";
import SEO from "../components/seo";
import { GatsbySeo } from 'gatsby-plugin-next-seo';




const Products = () => (
  <Layout>
    {/*<SEO title="Our Products" />*/}
    <GatsbySeo
title='Our LED Products'
description='LEDpac uses high powered LEDs to create products including UV-C Disinfectant, Solar Powered, RGB, and ChipOnBoard LEDs.'
/>

    <ProductsPage />
  </Layout>
);
export default Products;
