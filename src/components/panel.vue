<script setup>
//COMPONENTS
import BasketCount from "@/components/basketCount.vue";
import HeaderLogin from "@UI/header/headerLogin.vue";
</script>

<template>
  <div class="panel">
    <BasketCount/>
    <header-login/>
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.panel {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  max-width: 14.35rem;
  width: 100%;
}
</style>