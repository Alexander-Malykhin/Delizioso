<template>
  <router-link to="/login" class="button">
    Log In
  </router-link>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.button {
  padding: 1.1rem 2.5rem;
  border-radius: 11.5rem;
  color: $white;
  font-weight: $fw_600;
  background-color: $green;
}
</style>
