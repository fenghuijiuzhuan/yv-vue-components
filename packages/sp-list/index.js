/*
 * @path        : \yv-vue-components\packages\sp-list\index.js
 * @message     : js
 * @Author      : YvanGuo
 */
import SpList from './src/main';

/* istanbul ignore next */
SpList.install = function(Vue) {
  Vue.component(SpList.name, SpList);
};

export default SpList;
