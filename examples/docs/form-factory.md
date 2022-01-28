## Form-Factory 表单工厂

自由搭配的表单项组合。

### 基本用法

传递不同参数显示不同表单组合

:::demo 输入框、选择框、日期边界等
```html
<template>
  <div>
    <yv-form-factory
      submit
      reset
      dateRange
      select
    ></yv-form-factory>
  </div>
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| submit | 提交按钮 | boolean | true/false | false |
| reset  | 重置按钮 | boolean | true/false | false |
| dateRange | 日期边界 | boolean/array | - | - |
| select | 选择框 | boolean/array | - | - |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| query | 点击提交按钮时触发 | 返回表单的数据键值对 |
