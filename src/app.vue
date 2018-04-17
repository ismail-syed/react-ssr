<template>
  <div id="app">
    <div id="cover"></div>
    <m-header></m-header>
    <todo></todo>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from './todo/m-header.vue'
import MFooter from './todo/m-footer.vue'
import Todo from './todo/todo.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    MHeader,
    MFooter,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
#app
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
#cover
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: -1;
</style>

