<template>
  <PageLayout>
    <ContentLayout>
      <div slot="first">
        <h1>{{ $page.show.title }}</h1>
        <div
          class="content"
          v-html="$page.show.content"
        />
      </div>
      <VLinks
        slot="second"
        :items="[
          { title: 'Aahaa', to: '/a' },
          { title: 'Bebee', to: '/a' }
        ]"
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
  }
</page-query>

<style>
</style>
