<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.initData()
  },
  watch: {
    'msg': 'handleChange'
  },
  methods: {
    initData () {
      // console.log(!this.msg)
      if (this.msg) {
        return
      }
      axios.get('/mockjs/17483/getData').then(response => {
        // console.log(response)
        console.log(this.msg)
        this.$store.dispatch('setDesc', response.data.desc)
        this.msg = this.$store.getters.getDesc
        console.log(this.msg)
      }, response => {})
    },
    handleChange () {
      alert('变啦')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
