const siteMetadata = {
  title: `Shashwat Nandan`,
  description: `This is my coding blog`,
};

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",

    "gatsby-plugin-theme-ui",

    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};
