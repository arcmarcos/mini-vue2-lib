<template>
  <FormRoot :float_label="float_label">
    <input
      v-model="mutable"
      v-bind="$attrs"
      class="
        peer placeholder-transparent h-11 w-full border-0 border-b-2 border-gray-400
      text-gray-900 focus:outline-transparent focus:border-blue-600 focus:placeholder-gray-400
      "
      ref="input"
      @focus="onFocus"
      @blur="onBlur"
      @mouseenter="onHover"
      @mouseleave="onHover"
    >
    <button
      v-show="showClearButtom"
      class="
        h-8 w-8 cursor-pointer absolute top-2 right-1 flex items-center bg-transparent border-none
        rounded-full outline-gray-500
      "
      title="Clear input"
      @click="clearInput"
      @mouseenter="onHover"
      @mouseleave="onHover"
    >
      <CustomIcon name="close" :size="24" />
    </button>
  </FormRoot>
</template>

<script>
export default {
  name: 'FormInput',
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
  data () {
    return {
      focus: false,
      hover: false,
    }
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
    showClearButtom () {
      return this.hover && this.mutable !== ''
    },
  },
  methods: {
    clearInput (e) {
      this.mutable = ''
    },
    onBlur () {
      this.focus = false
    },
    onFocus () {
      this.focus = true
    },
    onHover () {
      this.hover = !this.hover
    },
  },
}
</script>
