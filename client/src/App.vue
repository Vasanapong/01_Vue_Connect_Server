<template>
  <div>{{data}}</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      data : ""
    }
  },
  methods: {
    async fetchData(){
      let response = await fetch('http://localhost:3001/api/greeting')
      let data = await response.json()
      this.data = data
    }
  },
  beforeMount() {
    this.fetchData()
  },
}
</script>

<style>

</style>
