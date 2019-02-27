<template>
  <PageLayout>
    <PeopleLayout>
      <div slot="first">
        <h1>Inimesed</h1>
        <h2>{{ $page.people.title }}</h2>
        <div
          class="content"
          v-html="$page.people.content"
        />
      </div>
      <VLinks
        slot="second"
        :items="$page.allPeople.edges.map(e => e.node)"
      />
      <Gallery
        slot="third"
        :images="$page.people.fields"
      />
    </PeopleLayout>
  </PageLayout>
</template>

<page-query>
  query People ($path: String!) {
    people (path: $path) {
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
    title: 'Inimesed'
  }
}
</script>

<style>
</style>
