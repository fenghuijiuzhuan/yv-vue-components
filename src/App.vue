<!--
 * @path        : \vue-scroll-tabs\src\App.vue
 * @message     : 
 * @Author      : yvangod
-->
<template>
  <div>
    首页
    <scroll-tabs />
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
