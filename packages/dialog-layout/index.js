/*
 * @path        : \yv-vue-components\packages\dialog-model\index.js
 * @message     : js
 * @Author      : YvanGuo
 */
import DialogLayout from './src/main';

/* istanbul ignore next */
DialogLayout.install = function(Vue) {
  Vue.component(DialogLayout.name, DialogLayout);
};

export default DialogLayout;
