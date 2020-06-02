module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Native Bootcamp',
    description: 'IBM Cloud Native Bootcamp',
    keywords: 'ibm,garage,cloud-native,bootcamp,cloud-native-101,cloudnative,native,101,cloud,cp4apps,kubernetes,containers,ci,cd,cicd,tekton,argocd,learning',
  },
  pathPrefix: "/",
  plugins: [
    'gatsby-transformer-json',
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/learning-cloudnative-101',
          subDirectory: '/'
        }
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
        head: true
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-zoom`,
        ],
      },
    },
  ]
};
