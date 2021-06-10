const siteMetadata = {
  title: `Shashwat Nandan`,
  description: `This is my coding blog`,
  lastBuildDate: new Date(Date.now()).toISOString(),
  siteUrl: "https://shashwatnandan.com",
  authorName: "Shashwat Nandan",
  twitterUsername: "@nandan.shashwat",
  siteLanguage: "en-US",
  siteLocale: "en_us",
};

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    // "gatsby-remark-images",
    // "gatsby-plugin-mdx",

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
