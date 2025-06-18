<script setup>
//IMAGES
import imageBasket from "@assets/basket.png";
</script>

<template>
  <button class="basket">
    <img :src="imageBasket" alt="basket-icon" class="basket__image"/>
    <span class="basket__counter">1</span>
  </button>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.basket {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: rgba($input, 0.1);
  position: relative;

  &__image {
    width: 1.7rem;
    max-width: max-content;
    height: auto;
  }

  &__counter {
    position: absolute;
    z-index: 99;
    width: 1.14rem;
    height: 1.14rem;
    background-color: $red;
    border-radius: 100%;
    top:  0.7rem;
    right: 0.7rem;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    font-weight: $fw_500;
  }
}
</style>