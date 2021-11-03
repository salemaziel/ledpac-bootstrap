/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header2 from "./header2";
import Footer2 from './Footer2/footer2'
//import "./layout.scss";
import '../css/main.css'
import '../css/styles.css'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header2 siteTitle={data.site.siteMetadata.title} />
        {children}
      <Footer2 />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
