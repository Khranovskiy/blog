module.exports = {
  siteMetadata: {
    title: `Khranovsky Blog`,
    author: `Denis Khranovsky`,
    description: `Denis Khranovsky Blog`,
    siteUrl: `https://khranovsky.com`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/xronosd`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-netlify-cms`
    }
  ]
};
