## Scroll-Tabs 滚动按钮组

一个具有滑动切换动画的tab切换组件。

### 基本用法

自适应父组件容器大小。

:::demo Scroll-Tabs 组件提供两种主题，由`block`属性指定，默认值为`false`。
```html
<template>
  <div>
    <yv-scroll-tabs class="nav1"></yv-scroll-tabs>

    <yv-scroll-tabs
      block
      class="nav2"
    ></yv-scroll-tabs>
  </div>
</template>
```
:::

### 详细使用
:::demo Scroll-Tabs 提供了默认可配值状态，mounted、selected事件
```html
<template>
  <yv-scroll-tabs
    ref="ScrollTab"
    :value="values"
    :activeButton="1"
    @on-mounted="getScrollTabBoxBound"
    @on-selected="checkTab"
  ></yv-scroll-tabs>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          name: '开发'
        },
        {
          name: '市场'
        },
        {
          name: '财务'
        }
      ],
    }
  },
  methods: {
    getScrollTabBoxBound() {
      var el = this.$refs.ScrollTab.$el;
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
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value     | 传递给组件的数据           | array | — | [{ name: '按钮一', }, { name: '按钮二', }, { name: '按钮三', }, { name: '按钮四', }, { name: '...', }, { name: '按钮九千九百九十九', }] |
| block | 主题 | boolean | true/false | false |
| activeButton | 默认激活的按钮Index | number | — | 0 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| mounted | 此方法在组件加载完成后自动执行（会在组件的mounted生命周期中执行） | — |
| selected | 此方法是在监听到组件切换时执行 | index：当前激活的tab按钮的数组下标 value: 当前激活的tab按钮的数据项 |
