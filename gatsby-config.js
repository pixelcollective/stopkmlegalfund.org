module.exports = {
  siteMetadata: {
    title: "Stop KM Legal Fund",
    author: "Stop KM Legal Fund",
    description: "Support the legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan."
  },
  pathPrefix: 'http://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
