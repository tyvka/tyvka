<template>
  <div>
    <slot
      :items="[
      {
        title: 'Lavastused',
        title_en: 'Performances',
        path: $static.allPerformance.edges[0].node.path,
        img: '/images/front/front1.png'
      },
      {
        title: 'Kontserdid',
        title_en: 'Music',
        path: $static.allMusic.edges[0].node.path,
        img: '/images/front/front2.png'
      },
      {
        title: 'Näitused',
        title_en: 'Shows',
        path: $static.allShow.edges[0].node.path,
        img: '/images/front/front3.png'
      },
      {
        title: 'Inimesed',
        title_en: 'People',
        path: $static.allPeople.edges[0].node.path,
        img: '/images/front/front4.png'
      },
      {
        title: 'Sündmused',
        title_en: 'Events',
        path: $static.allEvent.edges[0].node.path,
        img: '/images/front/front5.png'
      },
    ]"
    />
  </div>
</template>

<static-query>
  query Home ($page: Int) {
    allPerformance (page: $page, order: ASC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    allMusic (page: $page, order: ASC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    allShow (page: $page, order: ASC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    allPeople (page: $page, order: ASC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    allEvent (page: $page, order: ASC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</static-query>

