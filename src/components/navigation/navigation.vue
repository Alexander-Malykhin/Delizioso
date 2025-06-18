<script setup>
import {ref} from "vue";
//SETTINGS
import {navigationList} from "@/components/navigation/settings/navigatonList.js";
const navigationLinks = ref(navigationList)
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
          v-for="navigationLink in navigationLinks"
          class="navigation__item"
          :key="navigationLink.id"
      >
        <router-link
            :to="navigationLink.path"
            class="navigation__link"
            active-class="navigation__link-active"
        >
              {{ navigationLink.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.navigation {
  max-width: 41rem;
  width: 100%;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem
  }

  &__item {
    font-weight: $fw_400;
  }

  &__link {
    color: $black;
    &-active {
      color: $orange;
    }
  }
}
</style>