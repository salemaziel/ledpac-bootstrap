import React from "react";
import Layout from "../components/layout";

import ProductsPage from "../components/PageComponents/Products/ProductsPage";
import SEO from "../components/seo";

const Products = () => (
  <Layout>
    <SEO title="Our Products" />

    <ProductsPage />
  </Layout>
);
export default Products;
