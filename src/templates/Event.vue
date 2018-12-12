<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Sündmused</h1>
        <h2>{{ $page.event.title }}</h2>
        <div
          class="content"
          v-html="$page.event.content"
        />
      </div>
      <VLinks
        slot="second"
        :items="$page.allEvent.edges.map(e => e.node)"
      />
      <Gallery
        slot="third"
        :images="[
          $page.event.fields.image,
          $page.event.fields.image,
        ]"
      />
    </ContentLayout>
  </PageLayout>
</template>

<page-query>
  query Event ($path: String!) {
    event (path: $path) {
      title
      content
      fields {
        image
      }
    }
    allEvent (page: 0, order: ASC) {
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
