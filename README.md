<!--
 * @path        : \yv-vue-components\README.md
 * @message     : 
 * @Author      : yvangod
-->
<!-- 标题 -->
## yv-vue-components组件库
<!-- 介绍 -->
平常在vue项目中用到的时候，写的一些组件

### npm安装
```
npm install yv-vue-components
```
### 全局引用
```
import YvVueComponents from 'yv-vue-components'
Vue.use(YvVueComponents)
```
### 按需引用

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "yv-vue-components",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 ScrollTabs，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { ScrollTabs } from 'yv-vue-components';
import App from './App.vue';

Vue.component(ScrollTabs.name, ScrollTabs);
/* 或写为
 * Vue.use(ScrollTabs)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 示例
```
<!-- 下载项目 -->
npm install
<!-- 启动项目查看示例 -->
npm run dev
```
