<!--
 * @path        : \yv-vue-components\lib\ScrollTabs.vue
 * @message     : 滚动按钮组
 * @Author      : yvangod
-->
<template>
  <div class="g_scroll-button-group-wrap"
    :class="block&&'g_scroll-button-group-blockskin'"
    @selectstart.prevent
    @select.prevent
  >
    <ul
      v-show="value.length"
      class="g_scroll-button-group" 
    >
      <li
        v-for="(item,i) in value"
        :key="item.name+i"
        class="g_buttons"
        :class="current === i && 'g_active-button'"
        @click="clickItem(i, item)"
      >
        {{ item.name }}
      </li>
    </ul>
    
    <span class="g_sp-block"
      :style="{
        width: `${currentStyle.offsetWidth}px`,
        transform: `translate3d(${currentStyle.offsetLeft}px, 0, 0)`
      }"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [{
        name: '按钮一',
      }, {
        name: '按钮二',
      }, {
        name: '按钮三',
      }, {
        name: '按钮四',
      }, {
        name: '...',
      }, {
        name: '按钮九千九百九十九',
      }]
    },
    activeButton: {
      type: Number,
      default: 0
    },
    block: Boolean
  },
  data() {
    return {
      current: this.activeButton,
      currentStyle: {},
      animationId: null
    }
  },
  watch: {
    value(val) {
      if (!val.length) return
      this.$nextTick(() => {
        this.getBlockStyle(this.current)
      })
    },
    current(nVal) {
      this.getBlockStyle(nVal)
    }
  },
  mounted() {
    this.value.length && this.getBlockStyle(this.current)
    this.$emit('onMounted')
  },
  methods: {
    getBlockStyle(nVal) {
      const buttonItems = this.$el.querySelectorAll('li.g_buttons')
      const currentItem = buttonItems[nVal]
      this.currentStyle = {
        offsetWidth: currentItem.offsetWidth,
        offsetLeft: currentItem.offsetLeft
      }
      this.computedCenterSize(this.currentStyle)
    },
    computedCenterSize(currentStyle) {
      const wrapWidth = this.$el.offsetWidth
      const scrollWidth = this.$el.scrollWidth
      if (wrapWidth > scrollWidth) return
      const wrapCenter = wrapWidth / 2
      const left = currentStyle.offsetLeft
      const width = currentStyle.offsetWidth
      const diff = left + width / 2 - wrapCenter
      let distance
      distance = Math.min(scrollWidth - wrapWidth, diff)
      distance = Math.max(0, distance)
      if (this.animationId) {
        window.cancelAnimationFrame(this.animationId)
      }
      this.animationId = this.scrollToAnimate(distance)
    },
    scrollToAnimate(distance) {
      const scrollLeft = this.$el.scrollLeft
      const diff = distance - scrollLeft
      var step = diff / 5
      if (step > 0) {
        step = Math.ceil(step)
      } else {
        step = Math.floor(step)
      }
      if (Math.abs(diff) < 2) {
        this.$el.scrollTo(distance, 0)
        window.cancelAnimationFrame(this.animationId)
      } else {
        this.$el.scrollTo(scrollLeft + step, 0)
        this.animationId = window.requestAnimationFrame(this.scrollToAnimate.bind(this, distance))
      }
    },
    clickItem(index, row) {
      this.$nextTick(() => {
        this.current = index
        this.$emit('onSelected', index, row)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.g_scroll-button-group-wrap{
  height: 40px;
  overflow: auto;
  position: relative;
  background-color: #F5F5F5;
  border-radius: 20px;

  &::-webkit-scrollbar{
    display: none;
  }
  
  .g_sp-block{
    height: 32px;
    position: absolute;
    left: 0;
    top: 4px;
    z-index: 1;
    border-radius: 15px;
    background: linear-gradient(-26deg, #3A82FF 0%, #4B86EF 100%);
    box-shadow: 0px 0px 8px 0px #ACC1E5;
    transition: 225ms linear;
    display: block;
  }
}
.g_scroll-button-group{
  white-space: nowrap;
  width: max-content;
  height: 100%;
  padding: 4px 7px;
  font-size: 0;
  .g_buttons{
    height: 100%;
    line-height: 32px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 15px;
    font-size: 16px;
    color: #333333;
    margin-left: 6px;
    margin-right: 6px;
    cursor: pointer;
    transition: 225ms linear;
    
    position: relative;
    z-index: 2;
    display: inline-block;
  }
  .g_buttons:first-child{
    margin-left: 0;
  }
  .g_buttons:last-child{
    margin-right: 0;
  }
  .g_active-button{
    color: #FDFDFF;
    cursor: default;
  }
}
.g_scroll-button-group-blockskin{
  *{
    box-sizing: border-box;
  }
  background-color: transparent;
  height: 30px;
  border-radius: 0;
  .g_scroll-button-group{
    padding: 0;
    background-color: #fff;
    border: 1px solid #EEEEEE;
  }
  .g_buttons{
    background-color: transparent;
    margin: 0;
    line-height: 28px;
    color: #666;
    border-radius: 0;
    border-right: 1px solid #EEEEEE;
    &:last-child{
      border-right: none;
    }
  }
  .g_active-button{
    border-right-color: transparent;
  }
  .g_sp-block{
    height: 100%;
    border: 1px solid #3A81FF;
    border-radius: 0;
    background: unset;
    top: 0;
    &:after{
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      border-top: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 6px solid #3A81FF;
    }
  }
}
</style>
