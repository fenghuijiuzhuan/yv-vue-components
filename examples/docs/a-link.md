## A-Link 跳转链接

两种模式，分别为 route-link 和 原生的 a 标签。

### 基本用法

:::demo

```html
<template>
  <div>
    <p>
      <yv-a-link to="/">
        我是router-link
      </yv-a-link>
    </p>

    <p>
      <yv-a-link to="/" isNature>
        我是a标签
      </yv-a-link>
    </p>
  </div>
</template>
```

:::

### Attributes

| 参数     | 说明                        | 类型    | 可选值     | 默认值 |
| -------- | --------------------------- | ------- | ---------- | ------ |
| to       | 设置 href / to              | boolean | string     | -      |
| isNature | 设置 a 标签或者 router-link | boolean | true/false | false  |
