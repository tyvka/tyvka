<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Kontserdid</h1>
        <h2>{{ $page.music.title }}</h2>
        <div
          class="content"
          v-html="$page.music.content"
        />
      </div>
      <VLinks
        slot="second"
        :items="$page.allMusic.edges.map(e => e.node)"
      />
      <Gallery
        slot="third"
        :images="$page.music.fields"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Music ($path: String!) {
    music (path: $path) {
      title
      content
      fields {
        image1
        image2
        image3
        image4
        image5
      }
    }
    allMusic (page: 0, order: ASC) {
      edges {
        node {
          title
          path
        }
      }
    }
  }
</page-query>

<style>
</style>
