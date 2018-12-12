<template>
  <div>
    <slot :items="[
      {title: 'Etendused', path: $page.allShow.edges[0].node.path, img: '//media.voog.com/0000/0042/2942/photos/esimene.png'},
      {title: 'Kontserdid', path: $page.allMusic.edges[0].node.path, img: '//media.voog.com/0000/0042/2942/photos/esi_II.png'}
    ]" />
  </div>
</template>

<page-query>
  query Home ($page: Int) {
    allShow (page: $page, order: ASC) {
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
  }
</page-query>

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