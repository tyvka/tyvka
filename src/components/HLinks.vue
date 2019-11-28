<template>
  <Links>
    <div slot-scope="{items}" class="HLinks">
      <h4>
        <g-link v-for="(item,i) in items" :key="i" :to="item.path">
          <div>
            {{ item.title }}
            <br />
            <div style="opacity: 0.5">{{item.title_en }}</div>
          </div>
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
.HLinks > h4 {
  display: flex;
}
.HLinks > h4 > * {
  margin-left: 15px;
}
.HLinks > h4 > *:first-child {
  margin-left: 0;
}
</style>
