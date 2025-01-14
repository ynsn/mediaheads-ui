<script setup lang="ts">

import {computed, onMounted, PropType, useSlots} from "vue";
import Button from "@/components/Actions/Button.vue";

type ButtonGroupOrientation = 'horizontal' | 'vertical';

const props = defineProps({
  id: {type: String, required: false, default: ''},
  orientation: {type: String as PropType<ButtonGroupOrientation>, required: false, default: 'horizontal'},
  spacing: {type: Number, required: false, default: 8},
});

const buttonGroupOrientation = computed(() => {
  return props.orientation === 'horizontal' ? 'row' : 'column';
});

const buttonGroupSpacing = computed(() => {
  return `${props.spacing}px`;
});

</script>

<template>
<div :id="id"
     class="mh-btn-group">
  <slot></slot>
</div>
</template>

<style scoped lang="scss">

.mh-btn-group {
  position: relative;
  display: inline-flex;
  flex-direction: v-bind(buttonGroupOrientation);
  flex-basis: auto;
  gap: v-bind(buttonGroupSpacing);
}
</style>