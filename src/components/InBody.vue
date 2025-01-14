<script setup lang="ts">

import {onMounted, ref, useTemplateRef} from "vue";

const inBodyElementRef = useTemplateRef<HTMLDivElement>("inBodyElementRef");

onMounted(() => {
    const bodyElement: HTMLElement = document.body;
    if (inBodyElementRef.value) {
        bodyElement.appendChild(inBodyElementRef.value);
    }
});

</script>

<template>
<div ref="inBodyElementRef" class="mh-in-body">
    <slot></slot>
</div>
</template>

<style scoped lang="scss">
.mh-in-body {
  position: absolute;

  overflow: visible;
  z-index: 1200;
  width: 100%;
}
</style>