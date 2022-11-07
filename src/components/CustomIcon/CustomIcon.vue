<template>
  <component :is="dynamicIcon" v-bind="$attrs" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  inheritAttrs: false,
  name: 'CustomIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicIcon () {
      const icon = this.name
      return defineAsyncComponent(() => import(`./icons/${icon}Icon.vue`))
    },
  },
}
</script>
