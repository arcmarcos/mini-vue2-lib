<template>
  <FormRoot :float_label="float_label">
    <input
      v-model="mutable"
      v-bind="$attrs"
      class="peer h-[42px] px-4 z-0 focus:outline-cyan-800"
      :class="float_label ? 'pt-3' : 'py-4'"
      ref="input"
    />
  </FormRoot>
</template>

<script>
export default {
  name: 'FormInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    float_label: {
      type: String,
      default: '',
      description: 'Label that floats inside form field',
    },
  },
  computed: {
    mutable: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
