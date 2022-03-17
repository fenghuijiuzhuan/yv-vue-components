<template>
  <div class="yv-sp-list">
    <p class="yv-sp-list__title">{{ title }}</p>
    <ul class="yv-sp-list__list">
      <li class="yv-sp-list__item" v-for="item in list" :key="item.text">
        <template v-if="typeof item === 'string' || !item.type">
          {{ item || item.text }}
        </template>
        <template v-else-if="item.type === 'slot'">
          <slot :name="item.slotName"></slot>
        </template>
        <yv-a-link v-else :to="item.url" v-bind="item">{{ item.text }}</yv-a-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YvSpList',
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
