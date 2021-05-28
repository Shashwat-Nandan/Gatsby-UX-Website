const siteMetadata = {
  title: `Shashwat Nandan`,
  description: `This is my coding blog`,
};

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};
