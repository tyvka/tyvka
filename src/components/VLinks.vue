<template>
  <div class="VLinks">
    <h4
      v-for="(item,i) in items"
      :key="i"
    >
      <g-link :to="item.path">
        {{ item.title }}
      </g-link>
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
  color: #333;
}
</style>


