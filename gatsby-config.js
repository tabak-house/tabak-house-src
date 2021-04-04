require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Tabak.House - Интернет магазин табаков и кальянов в ДНР`,
    description: `Интернет магазин табаков и кальянов в ДНР.`,
    author: `76-Distinct Team`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tabak-house-website`,
        short_name: `tabak-house`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: './src/images/favicon.svg'
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:     process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// console.log("========> GATSBY CONFIG========\n" + JSON.stringify(module.exports, null, 2) + "\n========< GATSBY CONFIG========");
