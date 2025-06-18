<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
//IMAGES
import loginImage from '@/assets/login.png'
import logoImage from '@/assets/logo.svg'
//COMPONENTS
import AuthInput from "@/components/auth/authInput.vue";
//SETTINGS
import {getFormFields} from "@/components/auth/settings/fields.js";

const route = useRoute();

const isLogin = computed(() => route.path === '/login')
const formFields = computed(() => getFormFields(isLogin.value));

const inputData = ref(
    {
      fullName: '',
      email: '',
      password: '',
    }
)

const submitButton = (e) => {
  e.preventDefault()
  console.log("submit: ", inputData.value)
}
</script>

<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__header">
        <router-link to="/"><img :src="logoImage" alt="logo" class="auth__logo"/></router-link>
      </div>

      <div class="auth__main">
        <div class="auth__container-title">
          <h1 class="auth__title">
            {{ isLogin ? 'Login' : 'Sign up' }}
          </h1>
          <p class="auth__description">
            Don't have an account?
            <router-link
                :to="isLogin ? '/register' : '/login' "
                class="auth__description-span"
            >
              {{ isLogin ? 'Sign up' : 'Log in' }}
            </router-link>
          </p>
        </div>

        <form class="auth__form">
          <AuthInput
              v-for="formField in formFields"
              :key="formField.name"
              v-model="inputData[formField.name]"
              :placeholder="formField.placeholder"
              :label="formField.label"
              :type="formField.type"
          />

          <button class="auth__button" @click="submitButton">
            {{ isLogin ? 'Log in' : 'Sign up' }}
          </button>
        </form>
      </div>

      <div class="auth__footer">
        <p class="auth__footer-copyright">
          Copyright c 2022 Delizioso
        </p>
      </div>
    </div>

    <div class="auth__wrapper">
      <img :src="loginImage"
           alt="image-auth"
           class="auth__wrapper-image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.auth {
  display: flex;
  justify-content: space-between;

  &__logo {
    max-width: 100%;
    height: auto;
  }

  &__title {
    font-size: 2.85rem;
    font-weight: $fw_700;
    color: $black;
    font-family: "Raleway", sans-serif;
  }

  &__description {
    color: $description;
    font-weight: $fw_500;

    &-span {
      color: $blue;
    }
  }

  &__form {
    margin-top: 3.6rem;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
    width: 100%;
  }

  &__container {
    padding: 2.85rem;
    display: flex;
    flex-direction: column;
    max-width: 45%;
    width: 100%;
    align-items: center;

    &-title {
      margin-top: 5.7rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
  }

  &__wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;

    &-image {
      width: 100%;
      height: auto;
      max-height: 100vh;
      object-fit: cover;
    }
  }

  &__header {
    display: flex;
    width: 100%;
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30rem;
    width: 100%;
    align-items: center;
  }

  &__footer {
    justify-content: center;
    flex: 1;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: flex-end;

    &-copyright {
      color: $gray;
      font-weight: $fw_400;
    }
  }

  &__button {
    background-color: $orange;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: $fw_500;
    color: $white;
    padding: 1.3rem 0;
    border-radius: 0.7rem;
  }

}
</style>