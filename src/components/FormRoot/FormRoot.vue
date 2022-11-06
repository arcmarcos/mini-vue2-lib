<template>
  <div class="relative flex flex-col gap-1">
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
    absolute
    top-1
    left-5
    text-[10px]
    font-semibold
    placeholder-shown:placeholder:opacity-0
    peer-focus:text-cyan-800
  ;
}
</style>
