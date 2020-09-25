//module.exports = {
//  siteMetadata: {
//    title: `LEDpac LED Lighting Solutions`,
//    description: `LEDpac LED Lighting Solutions of Escondido, CA`,
//    author: `@salemaziel`,
//    siteUrl: `https://ledpac.salemaziel.design`
const config = require('./config/site');

  module.exports = {
    siteMetadata: {
      ...config,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: 'LEDpac LLC | %s',
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.ledpac.com',
          site_name: 'SiteName',
        },
        twitter: {
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.ledpc.com',
        sitemap: 'https://www.ledpac.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LEDpac LED Lighting Solutions`,
        short_name: `LEDpac`,
	      lang: `en`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ff0000`,
        display: `minimal-ui`,
        icon: `static/logo/Logo-dark.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
