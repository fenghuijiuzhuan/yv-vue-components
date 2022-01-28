## Dialog-Layout 弹窗简化模板

具有更简便的使用方式。

### 基本用法

与element-ui用法无二，部分参数变化。可以使用v-model。

:::demo dialog-layout 组件可以直接使用v-model绑定，transfer将dialog DOM插入到body中
```html
<template>
  <div>
    <el-button type="primary" @click="showDialog">打开弹窗</el-button>
    <yv-dialog-layout
      v-model="isShow"
      title="简化弹窗"
      transfer
    >
      弹窗
    </yv-dialog-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showDialog() {
        this.isShow = true
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value     | 是否显示弹窗，可用v-model绑定 | boolean | true/false | false |
