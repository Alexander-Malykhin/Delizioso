<template>
  <router-link class="button" to="/order">
    Order Now
  </router-link>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.button {
  padding: 1.2rem 4.4rem;
  border-radius: 11.6rem;
  background-color: $orange;
  color: $white;
  font-weight: $fw_600;
  font-size: 1.2rem;
}
</style>