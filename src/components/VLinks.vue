<template>
  <div class="VLinks">
    <h4 v-for="(item,i) in items" :key="i">
      <g-link :to="item.path">{{ item.title }}</g-link>
      <div
        v-if="item.title_en && item.title !== item.title_en"
        style="margin-top: 5px; opacity: 0.5;"
      >
        <g-link :to="item.path">{{ item.title_en }}</g-link>
      </div>
    </h4>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style>
.VLinks a {
  padding-bottom: 3px;
  color: #888;
}
.VLinks a.active {
  color: #000;
}
</style>


