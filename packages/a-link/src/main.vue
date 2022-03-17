<template>
  <router-link class="yv-a-link" v-if="!isNature" v-bind="$attrs">
    <slot></slot>
  </router-link>
  <a v-else class="yv-a-link" :href="$attrs.to">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'YvALink',
  props: {
    isNature: Boolean
  }
};
</script>
