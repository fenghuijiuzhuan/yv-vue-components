/*
 * @path        : \yv-vue-components\examples\entry.js
 * @message     :
 * @Author      : yvangod
 */
import Vue from 'vue';
import App from './App.vue';
import YvVueComponents from 'main/index.js';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';
import routes from './route.config';
import demoBlock from './components/demo-block';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import sideNav from './components/side-nav';
import footerNav from './components/footer-nav';

import 'packages/theme-chalk/src/index.scss';
import 'element-ui/lib/theme-chalk/index.css';
import './demo-styles/index.scss';
import './assets/styles/common.scss';

Vue.use(YvVueComponents);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', sideNav);
Vue.component('footer-nav', footerNav);

const globalEle = new Vue({
  data: { $isEle: false } // 是否 ele 用户
});

Vue.mixin({
  computed: {
    $isEle: {
      get: () => globalEle.$data.$isEle,
      set: (data) => {
        globalEle.$data.$isEle = data;
      }
    }
  }
});

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach((route) => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightElement);
  });
});

new Vue({
  ...App,
  router
}).$mount('#app');
