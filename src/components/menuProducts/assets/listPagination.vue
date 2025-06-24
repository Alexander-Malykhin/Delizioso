<script setup>
//IMAGES
import buttonLeft from '@assets/pagination/button-left.png'
import buttonRight from '@assets/pagination/button-right.png'
</script>

<template>
  <div class="pagination">
    <div class="pagination__list">
      <button class="button button__main">
        <img
            :src="buttonLeft"
            alt="button-icon">
      </button>

      <div class="pagination__total">
        <button class="button button__secondary">
          1
        </button>
        <button class="button button__secondary">
          3
        </button>
        <button class="button button__secondary">
          2
        </button>

        <button class="button button__dots">
          <span class="button__dot"></span>
          <span class="button__dot"></span>
          <span class="button__dot"></span>
        </button>
      </div>

      <button class="button button__main">
        <img
            :src="buttonRight"
            alt="button-icon">
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  &__list {
    display: flex;
    gap: 2.1rem;
    align-items: center;
  }

  &__total {
    display: flex;
    gap: 1.1rem
  }
}

.button {
  width: 55px;
  height: 55px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__main {
    background-color: $black;
  }

  &__secondary {
    background-color: rgba($orange, 0.1);
    color: $orange;
    font-size: 1.1rem;
    font-weight: $fw_600;
  }

  &__dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
  }

  &__dot {
    width: 0.35rem;
    height: 0.35rem;
    background-color: rgb($gray,0.8);
    border-radius: 100%;
  }
}
</style>