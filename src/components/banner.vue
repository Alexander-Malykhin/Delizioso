<script setup>
//IMAGES
import bannerImage from '@assets/banner.png'
//COMPONENTS
import BannerOrderNow from "@UI/banner/bannerOrderNow.vue";
import BannerReservation from "@UI/banner/bannerReservation.vue";
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="banner">
        <div class="banner__column">
          <div class="banner__header">
            <span class="banner__header-span">
              Restauran
            </span>

            <h1 class="banner__header-title">
              Italian Cuisine
            </h1>
          </div>

          <p class="banner__main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sodales senectus dictum arcu sit tristique donec eget.
          </p>

          <div class="banner__footer">
            <banner-order-now/>
            <banner-reservation/>
          </div>
        </div>

        <div class="banner__wrapper">
          <img :src="bannerImage" alt="banner-icon" class="banner__wrapper-image">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.section {
  margin-top: 11.4rem;
}

.banner {
  display: grid;
  grid-template-columns: 37.5rem 1fr;

  &__column {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2.14rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 2.14rem;

    &-span {
      border-radius: 9rem;
      background-color: rgba($orange, 0.2);
      color: $orange;
      font-weight: $fw_400;
      padding: 0.7rem 1.2rem;
      font-size: 1.2rem;
      max-width: max-content;
    }

    &-title {
      font-size: 5.7rem;
      font-weight: $fw_700;
      color: $black;
      width: 100%;
      line-height: 1.1;
    }
  }

  &__main {
    font-size: 1.45rem;
    color: $black;
    font-weight: $fw_400;
    line-height: 2;
  }

  &__footer {
    display: flex;
    gap: 1.8rem;
    margin-top: 2.2rem;
  }

  &__wrapper {
    max-width: 100%;
    height: auto;

    &-image {
      width: 100%;
      object-fit: cover;
    }
  }
}


</style>