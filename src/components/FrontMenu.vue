<template>
  <div style="display: flex;">
    <h3
      v-for="(item,i) in items"
      :key="i"
      style="font-size: 1.2rem; font-weight: 500; color: white;"
    >/
      <g-link
        :style="{
        flex: 1,
        height: '70vh',
        background: 'url(' + item.img + ')',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }"
        :to="item.path"
      >
        {{ item.title }} /
      </g-link>
    </h3>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

