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
      },
      {
        name: `GitHub`,
        url: `https://github.com/khranovskiy/`,
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
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl;
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at khranovsky.com. You can read it online by clicking here.)</div>
              `;

                let html = edge.node.html;
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.spoiler,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl, //+ edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl, // + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': html + postText }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(limit: 1000, sort: 
                {
                  order: DESC, 
                  fields: [frontmatter___date]
                }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 250)
                    html
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }            
            `,
            output: '/rss.xml',
            title: "Denis Khranovsky's Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Khranovsky`,
        short_name: `Khranovsky`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false,
      },
    }
  ]
};
