module.exports = {
  siteName: `VKA`,
  titleTemplate: `%s - VKA`,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/performance/*.md',
        typeName: 'Performance',
        route: '/performance/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/music/*.md',
        typeName: 'Music',
        route: '/music/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/show/*.md',
        typeName: 'Show',
        route: '/show/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/people/*.md',
        typeName: 'People',
        route: '/people/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/event/*.md',
        typeName: 'Event',
        route: '/event/:slug'
      }
    },
  ]
}
