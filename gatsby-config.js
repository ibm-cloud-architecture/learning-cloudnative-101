module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Native Bootcamp',
    description: 'IBM Cloud Native Bootcamp',
    keywords: 'ibm,garage,cloud-native,carbon,cloud-native-101,cloud native 101',
  },
  pathPrefix: "/",
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/learning-cloudnative-101',
          subDirectory: '/',
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149377589-4",
      },
    }
  ]
};
