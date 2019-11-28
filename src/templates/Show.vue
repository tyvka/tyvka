<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Näitused</h1>
        <h2>{{ $page.show.title }}</h2>
        <div class="content" v-html="splitContent[0]" />
      </div>
      <div slot="first_en">
        <h1>Shows</h1>
        <h2>{{ $page.show.title_en }}</h2>
        <div class="content" v-html="splitContent[1]" />
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
      title_en
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
          title_en
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
  },
  computed: {
    splitContent() {
      return this.$page.show.content.split(/<p>--<\/p>/);
    }
  }
};
</script>

<style>
</style>
