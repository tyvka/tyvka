<template>
  <Links>
    <div
      slot-scope="{items}"
      class="HLinks"
    >
      <h4>
       <g-link
        v-for="(item,i) in items"
        :key="i"
        :to="item.path"
      >
        {{ i !== 0 ? '/' : '' }} {{ item.title }}
      </g-link>
      </h4>
    </div>
  </Links>
</template>

<style>
.HLinks {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 800px) {
  .HLinks {
    display: block;
  }
}
</style>
