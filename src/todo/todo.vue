<template>
  <div class="real-app">
    <input type="text" placeholder="接下来要做什么呢？" @keyup.enter="addTodo" class="add-input" autofocus="autofocus">
    <Item :todo="todo"></Item>
    <Tabs :filter="filter"></Tabs>
  </div>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
export default {
  data () {
    return {
      todo: {
        id: 0,
        content: 'exercise !',
        completed: true
      },
      filter: 'all'
    }
  },
  methods: {
    addTodo () {
      console.log('add event')
    }
  },
  components: {
    Item,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
  .add-input
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 36px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
</style>
