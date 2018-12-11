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
  .home >>> .heading {
    margin-bottom: 70px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a h2 {
    margin-bottom: 10px;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: 3px;
  }

  ul li p {
    margin: 0;
    line-height: 1.5;
  }
</style>