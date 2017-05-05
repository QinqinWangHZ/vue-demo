<template>
  <div class="message2">
    <child v-on:message="reciveMessage"></child>
  </div>
</template>

<script>
import child from './Child.vue'

export default {
  name: 'message2',
  components: {
    child
  },
  methods: {
    reciveMessage: function (text) {
      alert('变啦' + text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    font-size:24px;
  }
  .message2 {
    padding-top: 50px;
  }
</style>
