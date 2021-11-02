/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `w129`,
    titleTemplate: "%s · The Real Hero",
    description: `Gatsby and Tailwindcss starter`,
    author: `@w129`,
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
      },
    },
  ],
}
