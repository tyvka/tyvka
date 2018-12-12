<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Etendused</h1>
        <h2>{{ $page.performance.title }}</h2>
        <div
          class="content"
          v-html="$page.performance.content"
        />
      </div>
      <VLinks
        slot="second"
        :items="$page.allPerformance.edges.map(e => e.node)"
      />
      <Gallery
        slot="third"
        :images="$page.performance.fields"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Performance ($path: String!) {
    performance (path: $path) {
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
    allPerformance (page: 0, order: ASC) {
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
