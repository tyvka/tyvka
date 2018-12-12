<template>
  <div class="PeopleLayout">
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
.PeopleLayout {
  display: flex;
  padding: 0 2rem;
}
.first {
  width: 500px;
}
.second {
  margin-left: 25px;
  width: 200px;
}
.third {
  flex: 1;
}
@media (max-width: 800px) {
  .PeopleLayout {
    display: block;
    padding: 0 2rem;
  }
  .first, .second, .third {
    width: 100%;
    margin: 2rem 0;
  }
}
</style>

