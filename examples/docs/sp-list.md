## Sp-Link 简易列表

### 基本用法

:::demo

```html
<template>
  <div>
      <yv-sp-list title="联系我们" :list="connect">
        <template v-slot:copy_weixin>
          <div title="点击复制微信号">
            添加微信（agll6688）
          </div>
        </template>
      </yv-sp-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connect: [
        {
          type: 'a',
          url: `tel:13783498628`,
          text: `咨询热线（13783498628）`,
          target: '_blank',
          isNature: true,
          nofollow: true
        },
        {
          type: 'a',
          url: `http://wpa.qq.com/msgrd?v=3&uin=379464123&site=qq&menu=yes`,
          text: `客服QQ（379464123）`,
          target: '_blank',
          isNature: true,
          nofollow: true
        },
        {
          type: 'slot',
          slotName: 'copy_weixin'
        }
      ]
    }
  }
}
</script>
```

:::

### Attributes

| 参数     | 说明                        | 类型    | 可选值     | 默认值 |
| -------- | --------------------------- | ------- | ---------- | ------ |
| title    | 列表标题                     | string  | -          | -      |
| list     | 设置列表数据                 | Array[string/object]   | -          | -      |

### list options

| 参数     | 说明                        | 类型    | 可选值     | 默认值 |
| -------- | --------------------------- | ------- | ---------- | ------ |
| 字符串   | 显示一段文字                 | string  | -          | -      |
| type     | 表示当前行的类型             | string   | a/slot/null | null |
| text     | 显示一段文字                  | string  | -          | -      |
| isNature | type为a时有效                  | string  | -          | -      |
| 任意a标签的属性 | type为a时有效            | string  | -          | -      |
| slotName | 具名插槽，在type为slot使用slot插槽时有效   | string  | -          | -      |


### slot

| 参数     | 说明                        | 类型    | 可选值     | 默认值 |
| -------- | --------------------------- | ------- | ---------- | ------ |
| slot    | 随便写吧                     | string  | -          | -      |
