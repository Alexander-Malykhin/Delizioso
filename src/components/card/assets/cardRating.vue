<script setup>
defineProps({
  stars:Number,
})

import cardStar from "@assets/card/star.png";
</script>

<template>
  <div class="rating">
    <div
        class="rating__item"
        v-for="star in stars"
        :key="star"
    >
      <img
          :src="cardStar"
          alt="star-icon"
          class="rating__image"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.rating {
  display: flex;
  align-items: center;
  gap: 0.7rem;

  &__item {
    width: 1.7rem;
    height: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 1.1rem;
    height: auto;
  }
}
</style>