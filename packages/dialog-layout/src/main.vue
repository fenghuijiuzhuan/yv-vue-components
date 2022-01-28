<template>
  <el-dialog
    :title="title"
    :visible.sync="isShow"
    :fullscreen="fullscreen"
    :show-close="!noCloser"
    :close-on-press-escape="!disableEsc"
    :close-on-click-modal="!disableCloseOnMask"
    :append-to-body="transfer"
    :modal="!noMask"
    :width="width"
    v-on="$listeners"
    class="yv-dialog-layout__wrapper"
  >
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
    <input type="text" :value="show" style="display: none" />
  </el-dialog>
</template>

<script>
export default {
  name: 'YvDialogLayout',
  model: {
    prop: 'show',
    event: 'on-change'
  },
  props: {
    show: Boolean,
    width: {
      type: String,
      default: '50%'
    },
    title: {
      type: String,
      default: ''
    },
    fullscreen: Boolean,
    noCloser: Boolean,
    transfer: Boolean,
    noMask: Boolean,
    disableEsc: Boolean,
    disableCloseOnMask: Boolean
  },
  computed: {
    isShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit('on-change', val);
      }
    }
  }
};
</script>
