<template>
  <div style="
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  ">
    <g-link
      v-for="(item,i) in [
        {title: 'Lavastused', to: '/shows'},
        {title: 'Kontserdid', to: '/music.html'},
        {title: 'Näitused', to: '/showing.html'},
        {title: 'Inimesed', to: '/people.html'},
        {title: 'Sündmused', to: '/other.html'}
      ]"
      :key="i"
      :to="item.to"
    >
      <h4> / {{ item.title }} </h4>
    </g-link>
  </div>
</template>