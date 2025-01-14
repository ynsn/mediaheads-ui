<script setup lang="ts">

import InBody from "@/components/InBody.vue";
import {onMounted, ref, useTemplateRef} from "vue";
import {computePosition, flip, offset} from "@floating-ui/vue";

const props = defineProps({
  id: {type: String, required: false, default: ''},
  name: {type: String, required: false, default: ''},
  content: {type: String, required: false, default: ''},
});

const hidden = ref<boolean>(true);
const targetRef = useTemplateRef("targetRef");
const tooltipRef = useTemplateRef("tooltipRef");

async function calc(): Promise<void> {
  const pos = await computePosition(targetRef.value, tooltipRef.value, {
    placement: 'bottom',
    middleware: [
        offset(8),
        flip()
    ]
  });

  Object.assign(tooltipRef.value.style, {
    top: `${pos.y}px`,
    left: `${pos.x}px`
  });

  console.log(pos)
}

onMounted(() => {
  calc();
  window.addEventListener('resize', calc);
});

function show(): void {
  hidden.value = false;
  calc();
}

function hide(): void {
  hidden.value = true;
}

</script>

<template>
  <div ref="targetRef" class="mh-tooltip-wrapper" @mouseenter="show" @mouseleave="hide" @focus="show" @blur="hide">
    <slot></slot>
  </div>

  <InBody>
    <div :id="id"
         ref="tooltipRef"
         :class="['mh-tooltip', hidden && 'mh-hidden']">
      <span class="mh-tooltip-content">{{ content }}</span>
    </div>
  </InBody>

</template>

<style scoped lang="scss">
.mh-tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.mh-tooltip {
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 11px;
  transition: all 0.175s ease-in-out;
}

.mh-hidden {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-5px);
}
</style>