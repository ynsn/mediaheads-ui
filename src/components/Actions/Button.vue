<script setup lang="ts">

import "material-symbols";
import "@/common/styles/styles.scss";
import vars from "@/common/styles/vars.module.scss";
import "@/common/styles/styles.scss";

import Icon from "@/components/Icon.vue";

import {computed, onMounted, PropType, useTemplateRef} from "vue";
import Spinner from "@/components/Status/Spinner.vue";
import InBody from "@/components/InBody.vue";

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonSize = 'small' | 'normal' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'invisible';

const props = defineProps({
  id: {type: String, required: false, default: ''},
  name: {type: String, required: false, default: ''},
  label: {type: String, required: false, default: ''},
  icon: {type: String, required: false, default: ''},
  autofocus: {type: Boolean, required: false, default: false},
  disabled: {type: Boolean, required: false, default: false},
  pending: {type: Boolean, required: false, default: false},
  rounded: {type: Boolean, required: false, default: false},
  variant: {type: String as PropType<ButtonVariant>, required: false, default: 'primary'},
  size: {type: String as PropType<ButtonSize>, required: false, default: 'normal'},
  type: {type: String as PropType<ButtonType>, required: false, default: 'button'},
});

const emit = defineEmits<{
  click: [event: PointerEvent]
}>();

const buttonElement = useTemplateRef<HTMLButtonElement>("buttonElement");

const buttonSize = computed(() => {
  return `mh-btn-${props.size}`;
});

const buttonVariant = computed(() => {
  return `mh-btn-${props.variant}`;
});

const buttonRound = computed(() => {
  return props.rounded ? 'mh-btn-round' : '';
});

const buttonPadding = computed(() => {
  if (props.label.length === 0) {
    return '0 0';
  }

  switch (props.size) {
    case 'small':
      return '4px 8px';
    case 'normal':
      return '6px 12px';
    case 'large':
      return '8px 16px';
    default:
      return '0 0';
  }
});

const spinnerColor = computed(() => {
  switch (props.variant) {
    case 'primary':
      return vars.colorPrimary;
    case 'secondary':
      return vars.colorSecondary;
    case 'tertiary':
      return vars.colorGray;
      case 'invisible':
      return vars.colorGray;
    default:
      return vars.colorPrimary;
  }
});

const spinnerWeight = computed(() => {
  return props.size === 'small' ? 1 : props.size === 'normal' ? 2 : 3
});

function getIconMargin(): String {
  let margin = 0;
  if (props.label.length > 0) {
    switch (props.size) {
      case 'small':
        margin = 4;
        break;
      case 'normal':
        margin = 8;
        break;
      case 'large':
        margin = 8;
        break;
      default:
        margin = 8;

    }
  }
  return `${margin}px`;
}

function onClick(event: Event): void {
  emit('click', event);
}

</script>

<template>
  <button :id="id"
          :name="name"
          :autofocus="autofocus"
          :disabled="disabled || pending"
          :type="type"
          :class="[buttonSize, buttonVariant, buttonRound, buttonPadding]"
          @click="onClick"
  ref="buttonElement">
    <div :class="['mh-btn-content', {'v-hidden': props.pending}]">
      <Icon v-if="icon != ''" :name="icon"
            :size="props.size"
            :style="{marginRight: getIconMargin()}"/>
      <slot>{{ label }}</slot>
    </div>
    <Spinner v-if="props.pending"
             class="pending-indicator"
             :primary-color="spinnerColor"
             :weight="spinnerWeight"
    />
  </button>

</template>

<style scoped lang="scss">

.mh-btn {
  position: relative;
  width: auto;
  padding: v-bind(buttonPadding);
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: none;
  transition: all 0.175s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(1.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:disabled:hover {
    cursor: not-allowed;
    filter: none;
    opacity: 0.5;
  }

  &-round {
    border-radius: 1.5rem;
  }

  &-small {
    @extend .mh-btn;
    min-height: 28px;
    min-width: 28px;
    font-size: 11px;

    .pending-indicator {
      position: absolute;
      width: 16px;
      height: 16px;
    }
  }

  &-normal {
    @extend .mh-btn;
    min-height: 32px;
    min-width: 32px;
    font-size: 13px;

    .pending-indicator {
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  &-large {
    @extend .mh-btn;
    min-height: 40px;
    min-width: 40px;
    font-size: 15px;

    .pending-indicator {
      position: absolute;
      width: 24px;
      height: 24px;
    }
  }

  &-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-primary);

    &:focus {
      outline: 3px solid var(--color-primary-outline);
    }
  }

  &-secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
    border: 1px solid var(--color-secondary);

    &:focus {
      outline: 3px solid var(--color-secondary-outline);
    }
  }

  &-tertiary {
    background-color: var(--color-white);
    color: var(--color-gray);
    border: 1px solid var(--color-gray-light);

    &:focus {
      outline: 3px solid var(--color-gray-outline);
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.95);
    }
  }

  &-invisible {
    background-color: transparent;
    color: #25292e;
    border: 1px solid transparent;

    &:focus {
      outline: 3px solid rgba(0, 0, 0, 0.0);
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:disabled {
      opacity: 0.5;
    }

    &:disabled:hover {
      filter: none;
      opacity: 0.5;
    }
  }

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>