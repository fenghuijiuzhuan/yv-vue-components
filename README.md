<!--
 * @path        : \yv-vue-components\README.md
 * @message     : 
 * @Author      : yvangod
-->
<!-- 标题 -->
# 一个vue组件库
<!-- 介绍 -->
组件
- ScrollTabs 一个具有滑动切换动画的tab切换组件

## npm安装
```
npm install yv-vue-components
```
### 模块化导入
```
import {
  ScrollTabs
} from 'yv-vue-components'
```
### 在html中的引入
```
<script src="/dist/yv-vue-components.js"></script>
```
### 使用
```
<template>
  <!-- ...... -->
    <scroll-tabs
      ref="ScrollTab"
      :value="values"
      :activeButton="1"
      block
      @on-mounted="getScrollTabBoxBound"
      @on-selected="checkTab"
    />
  <!-- ...... -->
</template>

<script>
import {
  ScrollTabs
} from 'yv-vue-components'
export default {
  components: {
    ScrollTabs
  },
  data() {
    return {
      values: [],
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
```
### 示例
```
<!-- 下载项目 -->
npm install
<!-- 启动项目查看示例 -->
npm run dev
```
## 参数
- value: 传递给组件的数据
  - type: Array
  - default: ```[{ name: '按钮一', }, { name: '按钮二', }, { name: '按钮三', }, { name: '按钮四', }, { name: '...', }, { name: '按钮九千九百九十九', }]```
  - 注意：数据项必传属性name
- activeButton: 默认激活选中项的index
  - type: Number
  - default: 0
- block: 是否使用方形样式
  - type: Boolean
  - ddefault: false
## 方法
on-mounted 此方法在组件加载完成后自动执行（会在组件的mounted生命周期中执行）
- 参数：function(){ ... }

on-selected 此方法是在监听到组件切换时执行
- 参数：function(index, value){ ... }
  - index：当前激活的tab按钮的数组下标
  - value: 当前激活的tab按钮的数据项
