/*
 * @path        : \yv-vue-components\packages\form-factory\index.js
 * @message     : js
 * @Author      : YvanGuo
 */
import FormFactory from './src/main';

/* istanbul ignore next */
FormFactory.install = function(Vue) {
  Vue.component(FormFactory.name, FormFactory);
};

export default FormFactory;
