require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Max Monis",
    description: "Toronto web developer",
    author: "Max Monis <mmonis77@gmail.com>",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "max-monis",
        short_name: "monis",
        start_url: "/",
        background_color: "#486486",
        theme_color: "#486486",
        display: "minimal-ui",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.API_TOKEN,
      },
    },
  ],
}
