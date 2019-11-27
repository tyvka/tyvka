<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Lavastused</h1>
        <h2>{{ $page.performance.title }}</h2>
        <div class="content" v-html="splitContent[0]" />
      </div>
      <div slot="first_en">
        <h1>Performances</h1>
        <h2>{{ $page.performance.title_en }}</h2>
        <div class="content" v-html="splitContent[1]" />
      </div>
      <VLinks slot="second" :items="$page.allPerformance.edges.map(e => e.node)" />
      <Gallery
        slot="third"
        :images="{image1: $page.performance.image1,image2: $page.performance.image2,image3: $page.performance.image3,image4: $page.performance.image4,image5: $page.performance.image5}"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Performance ($path: String!) {
    performance (path: $path) {
      title
      title_en
      content
      image1
      image2
      image3
      image4
      image5
    }
    allPerformance (page: 0, order: ASC) {
      edges {
        node {
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
    title: "Lavastused"
  },
  computed: {
    splitContent() {
      return this.$page.performance.content.split(/<p>--<\/p>/);
    }
  }
};
</script>

<style>
</style>
