<template>
  <router-link class="button" to="/reservation">
    Reservation
  </router-link>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.button {
  padding: 1.2rem 4.4rem;
  border-radius: 11.6rem;
  background-color: $green;
  color: $white;
  font-weight: $fw_600;
  font-size: 1.2rem;
}
</style>
<script setup lang="ts">
</script>