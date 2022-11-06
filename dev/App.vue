<template>
  <div>
    <FormInput
      v-model="input"
      placeholder="Type here"
      float_label="Type here"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      input: '',
    }
  },
}
</script>
