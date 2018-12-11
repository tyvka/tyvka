module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'show/*.md',
        typeName: 'ShowPost',
        route: '/show/:slug'
      }
    }
  ]
}
