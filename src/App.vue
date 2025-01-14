<script setup lang="ts">

import Button from "@/components/Actions/Button.vue";
import ButtonGroup from "@/components/Actions/ButtonGroup.vue";
</script>

<template>
  <ButtonGroup orientation="horizontal" spacing="4">

  <Button size="small"  icon="file_open" variant="tertiary" rounded></Button>
  <Button size="small" label="Button" variant="tertiary"/>
  <Button size="small" label="Byt" variant="tertiary"/>
  </ButtonGroup>
</template>

<style scoped lang="scss">

</style>
