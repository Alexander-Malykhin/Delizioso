<script setup>
import {ref} from "vue";
//IMAGES
import cardImage from "@assets/card/product.png";
//COMPONENTS
import CardRating from "@/components/card/assets/cardRating.vue";

const stars = ref(4);
</script>

<template>
  <article class="card">
    <div class="card__wrapper">
      <img
          :src="cardImage"
          alt="card-icon"
          class="card__wrapper-image"
      />
    </div>

    <div class="card__info">
      <h2 class="card__info-title">
        Spaghetti
      </h2>

      <CardRating :stars="stars"/>
    </div>

    <p class="card__info-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,
      diam.
    </p>

    <div class="card__footer">
      <span class="card__footer-price">
        $12.05
      </span>

      <button class="card__footer-button">
        Order now
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.card {
  display: flex;
  flex-direction: column;
  gap: 2.14rem;
  padding: 2.38rem;
  max-width: 24.8rem;
  transition: transform 0.2s ease;
  border-radius: 70px;
  background: rgb($gray, 0.1);

  &:hover {
    transform: translateY(-0.5rem);
  }

  &__wrapper {
    max-width: 19.25rem;
    height: auto;
    margin: 0 auto;

    &-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &-title {
      font-weight: $fw_600;
      font-size: 2.14rem;
    }
    &-description {
      font-weight: $fw_400;
      text-align: center;
      line-height: 2.0;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    &-price {
      font-weight: $fw_600;
      font-size: 1.5rem;
    }

    &-button {
      padding: 1.2rem 2.5rem;
      border-radius: 11.6rem;
      background: $orange;
      color: $white;
      font-weight: $fw_600;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
}
</style>