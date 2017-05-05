<template>
  <div class="message">
    <input type="text" v-model="msg">
    <br/>
    <child :inputValue="msg"></child>
  </div>
</template>

<script>
import child from './Child.vue'

export default {
  name: 'link2',
  data () {
    return {
      msg: '请输入'
    }
  },
  components: {
    child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input {
    font-size:24px;
  }
  .message {
    padding-top: 50px;
  }
</style>
