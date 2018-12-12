<template>
  <div style="display: flex;">
    <g-link
      v-for="(item,i) in [
        {img: '//media.voog.com/0000/0042/2942/photos/esimene.png', title: 'Lavastused', to: 'shows'},
        {img: '//media.voog.com/0000/0042/2942/photos/esi_II.png', title: 'Kontserdid', to: '/music.html'},
        {img: '//media.voog.com/0000/0042/2942/photos/esi_III.png',title: 'Näitused', to: '/showing.html'},
        {img: '//media.voog.com/0000/0042/2942/photos/esi_IV.png', title: 'Inimesed', to: '/people.html'},
        {img: '//media.voog.com/0000/0042/2942/photos/esimene.png', title: 'Sündmused', to: '/other.html'}
      ]"
      :key="i"
      :href="item.url"
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
      :to="item.to"
    >
      <h3 style="font-size: 1.2rem; font-weight: 500; color: white;">/ {{ item.title }} /</h3>
    </g-link>
  </div>
</template>
