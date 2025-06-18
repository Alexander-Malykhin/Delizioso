<script setup>
//COMPONENTS
import Logo from "@/components/logo.vue";
import Navigation from "@/components/navigation/navigation.vue";
import Panel from "@/components/panel.vue";
</script>

<template>
  <header class="header">
    <div class="container header__content">
      <Logo/>
      <Navigation/>
      <Panel/>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.header {
  margin-top: 3.6rem;

  &__content {
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>