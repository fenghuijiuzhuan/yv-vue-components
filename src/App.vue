<!--
 * @path        : \yv-vue-components\src\App.vue
 * @message     : 
 * @Author      : yvangod
-->
<template>
  <div>
    首页
    <scroll-tabs
      ref="ScrollTab"
      :activeButton="1"
      block
      @on-mounted="getScrollTabBoxBound"
      @on-selected="checkTab"
    />
  </div>
</template>

<script>
import { ScrollTabs } from '../lib/index'
export default {
  components: {
    ScrollTabs
  },
  data() {
    return {
    }
  },
  methods: {
    getScrollTabBoxBound() {
      var el = this.$refs.scrollButtonGroup.$el;
      var ww = el.offsetWidth;
      var cw = el.scrollWidth;
    },
    checkTab(index, val) {
      console.log('当前index and val', index, val)
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  color: red;
  p{
    color: green;
  }
}
</style>

<style scoped>
.b{
  font-size: 50px;
}
</style>
