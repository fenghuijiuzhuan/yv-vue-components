/*
 * @path        : \yv-vue-components\packages\a-link\index.js
 * @message     : js
 * @Author      : YvanGuo
 */
import ALink from './src/main';

/* istanbul ignore next */
ALink.install = function(Vue) {
  Vue.component(ALink.name, ALink);
};

export default ALink;
