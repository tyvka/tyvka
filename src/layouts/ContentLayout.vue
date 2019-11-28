<template>
  <div class="ContentLayout">
    <div class="first">
      <slot name="first" />
    </div>
    <div class="first_en">
      <slot name="first_en" />
    </div>
    <div class="second">
      <slot name="second" />
    </div>
    <div class="third">
      <slot name="third" />
    </div>
  </div>
</template>

<style>
.ContentLayout {
  display: flex;
  padding: 0 2rem;
}
.first {
  width: 200px;
  padding-right: 10px;
}
.first_en {
  width: 200px;
  padding-right: 10px;
  opacity: 0.7;
}
.first_en:hover {
  opacity: 1;
}
.second {
  margin-left: 25px;
  width: 200px;
}
.third {
  flex: 1;
}
@media (max-width: 800px) {
  .ContentLayout {
    display: block;
    padding: 0 2rem;
  }
  .first,
  .first_en,
  .second,
  .third {
    width: 100%;
    margin: 2rem 0;
  }
}
</style>
