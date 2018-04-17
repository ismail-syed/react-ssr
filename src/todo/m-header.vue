<template>
  <header class="main-header">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'Todo App'
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-header 
  text-align: center;
  h1 
    font-size: 100px;
    color: rgba(175, 47, 47, 0.4);
    margin: 20px;
</style>
