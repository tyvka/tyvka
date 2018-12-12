import PageLayout from '~/layouts/PageLayout.vue'
import ContentLayout from '~/layouts/ContentLayout.vue'
import Gallery from '~/components/Gallery.vue'
import HLinks from '~/components/HLinks.vue'
import VLinks from '~/components/VLinks.vue'

export default function (Vue) {
  Vue.component('PageLayout', PageLayout)
  Vue.component('ContentLayout', ContentLayout)
  Vue.component('Gallery', Gallery)
  Vue.component('HLinks', HLinks)
  Vue.component('VLinks', VLinks)
}