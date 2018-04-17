<template>
  <div class="helpers">
    <span class="left"></span>
    <span class="tabs">
      <span v-for="(state,index) in stats" :key="index" :class="['state', filter===state ? 'actived' : '']" @click="toggleFilter(index)">{{ state }}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear All completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      stats: ['all', 'active', 'completed']
    }
  },
  methods: {
    toggleFilter (index) {

    },
    clearAllCompleted () {

    }
  }
}
</script>

<style lang="stylus">
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #ffffff;
  font-size: 14px;
  font-smoothing: antialiased;
}

.left, .clear, .tabs {
  padding: 0 10px;
  box-sizing: border-box;
}

.left, .clear {
  width: 150px;
}

.left {
  text-align: left;
}

.clear {
  text-align: right;
  cursor: pointer;
}

.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;

  * {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);

    &.actived {
      border-color: rgba(175, 47, 47, 0.4);
      border-radius: 5px;
    }
  }
}
</style>


