<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Näitused</h1>
        <h2>{{ $page.show.title }}</h2>
        <div
          class="content"
          v-html="$page.show.content"
        />
      </div>
      <VLinks
        slot="second"
        :items="$page.allShow.edges.map(e => e.node)"
      />
      <Gallery
        slot="third"
        :images="$page.show.fields"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Show ($path: String!) {
    show (path: $path) {
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
    allShow (page: 0, order: ASC) {
      edges {
        node {
          _id
          title
          path
        }
      }
    }
  }
</page-query>

<style>
</style>
