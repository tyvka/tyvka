<template>
  <div class="ContentLayout">
    <div class="first">
      <slot name="first" />
    </div>
    <div class="second">
      <slot name="second" />
    </div>
    <div class="third">
      <slot name="third" />
    </div>
  </div>
</template>

<style scoped>
.ContentLayout {
  display: flex;
}
.first {
  width: 200px;
  margin-right: 15px;
}
.second {
  width: 200px;
}
.third {
  flex: 1;
}
</style>

