module.exports = {
  siteMetadata: {
    title: `LEDPac LED Lighting Solutions`,
    description: `LEDPac LED Lighting Solutions of Escondido, CA`,
    author: `@salemaziel`,
    siteUrl: `https://ledpac.salemaziel.design`
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ledpac.salemaziel.design',
        sitemap: 'https://ledpac.salemaziel.design/sitemap.xml',
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
        name: `LEDPac LED Lighting Solutions`,
        short_name: `LEDPac`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ff0000`,
        display: `minimal-ui`,
        icon: `src/images/Logo-dark.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
