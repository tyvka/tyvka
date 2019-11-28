<template>
  <PageLayout>
    <PeopleLayout>
      <div slot="first">
        <h1>Inimesed</h1>
        <h2>{{ $page.people.title }}</h2>
        <div class="content" v-html="splitContent[0]" />
        <h1>People</h1>
        <h2>{{ $page.people.title }}</h2>
        <div class="content" v-html="splitContent[1]" />
      </div>
      <VLinks slot="second" :items="$page.allPeople.edges.map(e => e.node)" />
      <Gallery
        slot="third"
        :images="{image1: $page.people.image1,image2: $page.people.image2,image3: $page.people.image3,image4: $page.people.image4,image5: $page.people.image5}"
      />
    </PeopleLayout>
  </PageLayout>
</template>

<page-query>
  query People ($path: String!) {
    people (path: $path) {
      title
      content
      image1
      image2
      image3
      image4
      image5
    }
    allPeople (page: 0, order: ASC) {
      edges {
        node {
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
    title: "Inimesed"
  },
  computed: {
    splitContent() {
      return this.$page.people.content.split(/<p>--<\/p>/);
    }
  }
};
</script>

<style>
</style>
