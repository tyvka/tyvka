<template>
  <div class="FrontMenu">
    <h3 v-for="(item, i) in items" :key="i" style="flex: 1; margin: 0;">
      <g-link
        class="card"
        :style="{
          background: 'url(' + item.img + ')',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 500
        }"
        :to="item.path"
        ><div>
          <div>{{ item.title }}</div>
          <div style="opacity: 0.5; margin-top: 7px;">{{ item.title_en }}</div>
        </div>
      </g-link>
    </h3>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style scoped>
.FrontMenu {
  display: flex;
  width: 100%;
}
.card {
  height: 70vh;
}
@media (max-width: 800px) {
  .FrontMenu {
    display: block;
  }
  .card {
    height: 120px;
  }
}
</style>
