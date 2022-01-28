<template>
  <div
    class="yv-scroll-button-group-wrapper"
    :class="block && 'yv-scroll-button-group-blockskin'"
    @selectstart.prevent
    @select.prevent
  >
    <ul v-show="value.length" class="yv-scroll-button-group">
      <li
        v-for="(item, i) in value"
        :key="item.name + i"
        class="yv-buttons"
        :class="current === i && 'yv-active-button'"
        @click="clickItem(i, item)"
      >
        {{ item.name }}
      </li>
    </ul>

    <span
      class="yv-sp-block"
      :style="{
        width: `${currentStyle.offsetWidth}px`,
        transform: `translate3d(${currentStyle.offsetLeft}px, 0, 0)`
      }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'YvScrollTabs',
  props: {
    value: {
      type: Array,
      default: () => [
        {
          name: '按钮一'
        },
        {
          name: '按钮二'
        },
        {
          name: '按钮三'
        },
        {
          name: '按钮四'
        },
        {
          name: '...'
        },
        {
          name: '按钮九千九百九十九'
        }
      ]
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
    };
  },
  watch: {
    value(val) {
      if (!val.length) return;
      this.$nextTick(() => {
        this.getBlockStyle(this.current);
      });
    },
    current(nVal) {
      this.getBlockStyle(nVal);
    }
  },
  mounted() {
    this.value.length && this.getBlockStyle(this.current);
    this.$emit('onMounted');
  },
  methods: {
    getBlockStyle(nVal) {
      const buttonItems = this.$el.querySelectorAll('li.yv-buttons');
      const currentItem = buttonItems[nVal];
      this.currentStyle = {
        offsetWidth: currentItem.offsetWidth,
        offsetLeft: currentItem.offsetLeft
      };
      this.computedCenterSize(this.currentStyle);
    },
    computedCenterSize(currentStyle) {
      const wrapWidth = this.$el.offsetWidth;
      const scrollWidth = this.$el.scrollWidth;
      if (wrapWidth > scrollWidth) return;
      const wrapCenter = wrapWidth / 2;
      const left = currentStyle.offsetLeft;
      const width = currentStyle.offsetWidth;
      const diff = left + width / 2 - wrapCenter;
      let distance;
      distance = Math.min(scrollWidth - wrapWidth, diff);
      distance = Math.max(0, distance);
      if (this.animationId) {
        window.cancelAnimationFrame(this.animationId);
      }
      this.animationId = this.scrollToAnimate(distance);
    },
    scrollToAnimate(distance) {
      const scrollLeft = this.$el.scrollLeft;
      const diff = distance - scrollLeft;
      var step = diff / 5;
      if (step > 0) {
        step = Math.ceil(step);
      } else {
        step = Math.floor(step);
      }
      if (Math.abs(diff) < 2) {
        this.$el.scrollTo(distance, 0);
        window.cancelAnimationFrame(this.animationId);
      } else {
        this.$el.scrollTo(scrollLeft + step, 0);
        this.animationId = window.requestAnimationFrame(
          this.scrollToAnimate.bind(this, distance)
        );
      }
    },
    clickItem(index, row) {
      this.$nextTick(() => {
        this.current = index;
        this.$emit('onSelected', index, row);
      });
    }
  }
};
</script>
