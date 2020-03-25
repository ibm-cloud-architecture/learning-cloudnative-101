module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Native Bootcamp',
    description: 'IBM Cloud Native Bootcamp',
    keywords: 'ibm,cloud-native,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.ibm.com/CASE/cloudnative-bootcamp',
          subDirectory: '/',
        },
      },
}
],
pathPrefix: "/CASE/cloudnative-bootcamp",
};
