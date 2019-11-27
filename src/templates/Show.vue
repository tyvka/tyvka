<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Näitused</h1>
        <h2>{{ $page.show.title }}</h2>
        <div class="content" v-html="$page.show.content" />
      </div>
      <VLinks slot="second" :items="$page.allShow.edges.map(e => e.node)" />
      <Gallery
        slot="third"
        :images="{image1: $page.show.image1,image2: $page.show.image2,image3: $page.show.image3,image4: $page.show.image4,image5: $page.show.image5}"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Show ($path: String!) {
    show (path: $path) {
      title
      content
      image1
      image2
      image3
      image4
      image5
    }
    allShow (page: 0, order: ASC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Näitused"
  }
};
</script>

<style>
</style>
