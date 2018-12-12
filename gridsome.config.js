module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'show/*.md',
        typeName: 'Show',
        route: '/show/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'music/*.md',
        typeName: 'Music',
        route: '/music/:slug'
      }
    }
  ]
}
