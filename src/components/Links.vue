<template>
  <div>
    <slot :items="[
      {
        title: 'Etendused',
        path: $static.allPerformance.edges[0].node.path,
        img: '/images/front1.png'
      },
      {
        title: 'Kontserdid',
        path: $static.allMusic.edges[0].node.path,
        img: '/images/front2.png'
      },
      {
        title: 'Kontserdid',
        path: $static.allShow.edges[0].node.path,
        img: '/images/front3.png'
      },
      {
        title: 'Inimesed',
        path: $static.allPeople.edges[0].node.path,
        img: '/images/front4.png'
      },
      {
        title: 'Sündmused',
        path: $static.allEvent.edges[0].node.path,
        img: '/images/front5.png'
      },
    ]" />
  </div>
</template>

<static-query>
  query Home ($page: Int) {
    allPerformance (page: $page, order: ASC) {
      edges {
        node {
          _id
          title
          path
        }
      }
    }
    allMusic (page: $page, order: ASC) {
      edges {
        node {
          _id
          title
          path
        }
      }
    }
    allShow (page: $page, order: ASC) {
      edges {
        node {
          _id
          title
          path
        }
      }
    }
    allPeople (page: $page, order: ASC) {
      edges {
        node {
          _id
          title
          path
        }
      }
    }
    allEvent (page: $page, order: ASC) {
      edges {
        node {
          _id
          title
          path
        }
      }
    }
  }
</static-query>

<style>
/*
[
        {img: '//media.voog.com/0000/0042/2942/photos/esimene.png', title: 'Lavastused', to: 'shows'},
        {img: '//media.voog.com/0000/0042/2942/photos/esi_II.png', title: 'Kontserdid', to: '/music.html'},
        {img: '//media.voog.com/0000/0042/2942/photos/esi_III.png',title: 'Näitused', to: '/showing.html'},
        {img: '//media.voog.com/0000/0042/2942/photos/esi_IV.png', title: 'Inimesed', to: '/people.html'},
        {img: '//media.voog.com/0000/0042/2942/photos/esimene.png', title: 'Sündmused', to: '/other.html'}
      ]
      */
</style>