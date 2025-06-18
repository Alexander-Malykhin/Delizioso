<script setup>
import logoImage from "@assets/logo.svg";
</script>

<template>
  <router-link to="/" class="logo">
    <img :src="logoImage"
         alt="logo"
         class="logo__image"
    />
    <p class="logo__text">
      Delizi<span class="logo__span">oso</span>
    </p>
  </router-link>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

  .logo {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    &__image {
      width: 3.6rem;
      height: auto;
    }

    &__text {
      font-weight: $fw_600;
      color: $black;
    }

    &__span {
      font-weight: $fw_600;
      color: $orange;
    }
  }
</style>