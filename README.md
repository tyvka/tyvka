# Gridsome Starter Blog

This is a minimal starter blog kit for markdown.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gridsome/gridsome-starter-markdown-blog)

```
<template>
  <Layout class="home">
    <g-link to="test">Test</g-link>
      <div v-for="{ node } in $page.allShow.edges" :key="node._id">
        <g-link :to="node.path">
          <h2>{{ node.title }}</h2>
        </g-link>
        <div v-html="node.content.slice(0,100)" />
      </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allShow (page: $page) {
      edges {
        node {
          _id
          title
          path
          content
        }
      }
    }
  }
</page-query>

<style scoped>
</style>
```