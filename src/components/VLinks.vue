<template>
  <div>
    <g-link
      v-for="(item,i) in items"
      :key="i"
      :to="item.to"
    >
      <h4>{{ item.title }}</h4>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

