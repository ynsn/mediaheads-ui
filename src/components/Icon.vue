<script setup lang="ts">

import "material-symbols";
import {computed,PropType} from "vue";

type IconSize = 'small' | 'normal' | 'large';
type IconVariant = 'outlined' | 'rounded' | 'sharp';

const props = defineProps({
  id: {type: String, required: false, default: ''},
  name: {type: String, required: false, default: ''},
  size: {type: String as PropType<IconSize>, required: false, default: 'normal'},
  variant: {type: String as PropType<IconVariant>, required: false, default: 'rounded'},
});

const iconSize = computed(() => {
  return `mh-icon-${props.size}`;
});

const iconVariant = computed(() => {
  return `material-symbols-${props.variant}`;
});

</script>

<template>
<span :id="id"
    :class="[iconVariant, iconSize]">{{ name }}</span>
</template>

<style scoped lang="scss">
.mh-icon {
  user-select: none;
  line-height: 0;

  &-small {
    @extend .mh-icon;
    font-size: 12pt;
  }

  &-normal {
    @extend .mh-icon;
    font-size: 14pt;
  }

  &-large {
    @extend .mh-icon;
    font-size: 16pt;
  }
}
</style>