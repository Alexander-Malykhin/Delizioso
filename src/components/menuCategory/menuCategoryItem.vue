<script setup>
const props = defineProps({
  items: Array,
  isActiveCategory: Boolean,
})
</script>

<template>
  <router-link
      v-for="menuItem in items"
      class="item"
      :class="{'item__active': isActiveCategory  === menuItem.category}"
      :key="menuItem.id"
      :to="{query:{category:menuItem.category}}"
  >
    {{menuItem.name}}
  </router-link>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;


.item {
  padding: 1.2rem 4.4rem;
  border-radius: 11.4rem;
  color: $black;
  font-size: 1.4rem;
  font-weight: $fw_400;

  &__active {
    background-color: $black;
    color: $white;
    font-weight: $fw_600;
  }
}
</style>