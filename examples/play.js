/*
 * @path        : \yv-vue-components\examples\play.js
 * @message     : 
 * @Author      : YvanGuo
 */
import Vue from 'vue';
import YvVueComponents from 'main/index.js';
import ElementUI from 'element-ui';
import App from './play/index.vue';
console.log(YvVueComponents)
console.log(ElementUI)
import 'packages/theme-chalk/src/index.scss';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(YvVueComponents);
Vue.use(ElementUI);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
