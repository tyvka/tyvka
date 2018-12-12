<template>
  <div>
      <div>
        <input v-show="false" type="range" v-model="height" min="10" max="100" />
      </div>
    <div
      :style="{
        display: 'flex',
        height: height + 'vh',
      }"
    >
      <div
        v-for="(image, i) in currentImages"
        @mouseover="activeIndex == i ? activeIndex = 0 : activeIndex = i"
        @mouseout="activeIndex = 0"
        :key="i"
        :style="{
          borderRight: '1px solid #ddd',
          display: 'flex',
          flex: activeIndex == i ? width : 1,
          background: 'url(' + image + ')',
          backgroundSize: 'cover',
          transition: 'flex 0.3s'
        }"
      ></div>
      </div>
    </div>
</template>

<script>
export default {
  props: { images: { default: {} }, height: { default: 70 }, width: { default: 8 }},
  data: () => ({ activeIndex: 0 }),
  computed: {
    currentImages() {
      return [
          this.images.image1 || null,
          this.images.image2 || null ,
          this.images.image3 || null,
          this.images.image4 || null ,
          this.images.image5 || null,
        ].filter(Boolean)
    }
  }
};
</script>