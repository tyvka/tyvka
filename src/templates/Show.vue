<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>Etendused</h1>
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
        :images="[
          $page.show.fields.image,
          $page.show.fields.image,
        ]"
      />
      </div>
    </ContentLayout>
  </PageLayout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.show.title
    };
  }
};
</script>

<page-query>
  query Show ($path: String!) {
    show (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      fields {
        image
      }
    }
    allShow (page: 0) {
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
