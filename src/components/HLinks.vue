<template>
  <Links>
    <div
      slot-scope="{items}"
      class="HLinks"
    >
      <g-link
        v-for="(item,i) in items"
        :key="i"
        :to="item.path"
      >
        <h4> {{ i !== 0 ? '/' : '' }} {{ item.title }} </h4>
      </g-link>
    </div>
  </Links>
</template>

<style>
.HLinks {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
