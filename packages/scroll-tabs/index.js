/*
 * @path        : \yv-vue-components\packages\scroll-tabs\index.js
 * @message     : js
 * @Author      : YvanGuo
 */
import ScrollTabs from './src/main';

/* istanbul ignore next */
ScrollTabs.install = function(Vue) {
  Vue.component(ScrollTabs.name, ScrollTabs);
};

export default ScrollTabs;
