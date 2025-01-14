<script setup lang="ts">

import "@/common/styles/styles.scss";
import vars from "@/common/styles/vars.module.scss";

import {computed} from "vue";

const props = defineProps({
  /**
   * The id of the element that is used for the spinner.
   */
  id: {type: String, required: false, default: ''},

  /**
   * The primary color of the spinner. This color is used for the shortest part of the spinner.
   */
  primaryColor: {type: String, required: false, default: '#0000002A'},

  /**
   * The secondary color of the spinner. This color is used for the longest part of the spinner.
   */
  secondaryColor: {type: String, required: false, default: '#FFF'},

  weight: {type: Number, required: false, default: 5},
});

const borderPixels = computed(() => {
  return `${props.weight}px`;
});

</script>

<template>
<span :id="id"
      class="loader">
</span>
</template>

<style scoped lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border: v-bind(borderPixels) solid v-bind(secondaryColor);
  border-bottom-color: v-bind(primaryColor);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>