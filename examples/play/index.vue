<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <yv-scroll-tabs></yv-scroll-tabs>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 'Hello Element UI!'
    };
  }
};
</script>
