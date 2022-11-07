<template>
  <div class="relative">
    <slot />
    <label
      v-if="float_label"
      class="float-label"
      @click="formFocus"
    >
      {{ float_label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormRoot',
  props: {
    float_label: {
      type: String,
      default: '',
      description: 'Label that floats inside form field',
    },
  },
  methods: {
    formFocus () {
      this.$parent.$refs?.input.focus()
    },
  },
}
</script>

<style>
.float-label {
  @apply
    absolute left-0 -top-3.5 text-gray-600 text-sm
    transition-all
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-400
    peer-placeholder-shown:top-2
    peer-focus:-top-3.5
    peer-focus:text-blue-600
    peer-focus:text-sm
    peer-focus:font-semibold
    peer-[:not(:placeholder-shown)]:font-semibold
  ;
}
</style>
