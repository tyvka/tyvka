<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Etendused</h1>
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
        :images="[
          $page.music.fields.image,
          $page.music.fields.image,
        ]"
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
        image
      }
    }
    allMusic (page: 0, order: ASC) {
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
