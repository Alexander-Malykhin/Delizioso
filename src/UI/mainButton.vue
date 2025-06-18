<script setup>
//SETTINGS
import { PROPS_BUTTON_MAIN } from "@/UI/settings/props.js";
defineProps(PROPS_BUTTON_MAIN);
</script>

<template>
  <component
      :is="link ? 'router-link' : 'button'"
      :to="link"
      :class="[classWidth, 'button', color ? color : 'primary']"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.button {
  padding: 1rem;
  border-radius: 11.5rem;
  color: $white;
  font-weight: $fw_600;
  background-color: $orange;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

.primary {
  background-color: $green;
}

.button--header {
  max-width: 8rem;
  width: 100%;
}
</style>
