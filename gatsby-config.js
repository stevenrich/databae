module.exports = {
  siteMetadata: {
    title: 'databae woodshop',
    author: 'Steven Rich',
    description: 'home of the Washington, DC-based woodshop',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
