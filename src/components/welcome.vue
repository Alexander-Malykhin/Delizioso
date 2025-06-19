<script setup>
import imageWelcome from '@assets/welcome.png'
import WelcomeButton from "@UI/welcome/welcomeButton.vue";
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="welcome">
        <div class="welcome__wrapper">
          <img :src="imageWelcome" alt="welcome" class="welcome__wrapper-image"/>
        </div>

        <div class="welcome__column">
          <h1 class="welcome__title">
            Welcome to <span class="welcome__title-span">delizioso</span>
          </h1>

          <p class="welcome__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh
            nulla malesuada ultricies nec quam
          </p>

         <div class="welcome__footer">
            <welcome-button/>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.section {
  margin-top: 14rem;
  background-color: rgba($green, 0.1);
}

.welcome {
  display: grid;
  grid-template-columns: 1fr 32rem;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 5.7rem 0;

  &__wrapper {
    width: 100%;
    height: 100%;

    &-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__title {
    font-size: 5.7rem;
    font-weight: $fw_700;
    color: $black;
    font-family: "Raleway", sans-serif;

    &-span {
      font-weight: $fw_700;
      font-family: "Raleway", sans-serif;
      font-size: 5.7rem;
      color: $orange;
    }
  }

  &__description {
    margin-top: 4.3rem;
    color: $black;
    line-height: 2.0;
    font-weight: $fw_400;
    max-width: 32.15rem;
    font-size: 1.2rem;
    width: 100%;
  }

  &__footer {
    margin-top: 8.7rem;
  }
}
</style>