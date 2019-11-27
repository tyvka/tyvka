<template>
  <div>
    <slot
      :items="[
      {
        title: 'Lavastused',
        path: $static.allPerformance.edges[0].node.path,
        img: '/images/front/front1.png'
      },
      {
        title: 'Kontserdid',
        path: $static.allMusic.edges[0].node.path,
        img: '/images/front/front2.png'
      },
      {
        title: 'Näitused',
        path: $static.allShow.edges[0].node.path,
        img: '/images/front/front3.png'
      },
      {
        title: 'Inimesed',
        path: $static.allPeople.edges[0].node.path,
        img: '/images/front/front4.png'
      },
      {
        title: 'Sündmused',
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

