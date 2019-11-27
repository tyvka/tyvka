<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Kontserdid</h1>
        <h2>{{ $page.music.title }}</h2>
        <div class="content" v-html="splitContent[0]" />
      </div>
      <div slot="first_en">
        <h1>Music</h1>
        <h2>{{ $page.music.title_en }}</h2>
        <div class="content" v-html="splitContent[1]" />
      </div>
      <VLinks slot="second" :items="$page.allMusic.edges.map(e => e.node)" />
      <Gallery
        slot="third"
        :images="{
          image1: $page.music.image1,
          image2: $page.music.image2,
          image3: $page.music.image3,
          image4: $page.music.image4,
          image5: $page.music.image5
        }"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Music ($path: String!) {
    music (path: $path) {
      title
      title_en
      content
      image1
      image2
      image3
      image4
      image5
    }
    allMusic (page: 0, order: ASC) {
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
    title: "Kontserdid"
  },
  computed: {
    splitContent() {
      return this.$page.music.content.split(/<p>--<\/p>/);
    }
  }
};
</script>

<style>
</style>
