<template>
  <div style="display: flex; width: 100%;">
    <h3
      v-for="(item,i) in items"
      :key="i"
      style="flex: 1;"
    >
      <g-link
        :style="{
        height: '70vh',
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
      >
        / {{ item.title }} /
      </g-link>
    </h3>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>

