<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Sündmused</h1>
        <h2>{{ $page.event.title }}</h2>
        <div class="content" v-html="splitContent[0]" />
      </div>
      <div slot="first_en">
        <h1 v-if="$page.event.title_en">Events</h1>
        <h2>{{ $page.event.title_en }}</h2>
        <div class="content" v-html="splitContent[1]" />
      </div>
      <VLinks slot="second" :items="$page.allEvent.edges.map(e => e.node)" />
      <Gallery
        slot="third"
        :images="{image1: $page.event.image1,image2: $page.event.image2,image3: $page.event.image3,image4: $page.event.image4,image5: $page.event.image5}"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Event ($path: String!) {
    event (path: $path) {
      title
      title_en
      content
      image1
      image2
      image3
      image4
      image5
    }
    allEvent (page: 0, order: ASC) {
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
    title: "Sündmused"
  },
  computed: {
    splitContent() {
      return this.$page.event.content.split(/<p>--<\/p>/);
    }
  }
};
</script>

<style>
</style>
