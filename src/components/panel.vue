<script setup>
//COMPONENTS
import MainButton from "@UI/mainButton.vue";
import BasketCount from "@/components/basketCount.vue";
</script>

<template>
  <div class="panel">
    <BasketCount/>
    <MainButton
        classWidth="button--header"
        link="/login"
        color="primary"
    >
      Log in
    </MainButton>
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.panel {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  max-width: 13.35rem;
  width: 100%;
}
</style>