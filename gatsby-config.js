module.exports = {
  siteMetadata: {
    title: `Khranovsky Blog`,
    author: `Denis Khranovsky`,
    description: `Denis Khranovsky Blog`,
    siteUrl: `https://khranovsky.com`,
    name: 'Khranovsky',
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/xronosd`,
      },
      {
        name: `github`,
        url: `http://github.com/khranovskiy/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/xronosd/`,
      },
      {
        name: `linkedin`,
        url: `http://linkedin.com/in/denis-khranovskiy/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`
    }
  ]
};
