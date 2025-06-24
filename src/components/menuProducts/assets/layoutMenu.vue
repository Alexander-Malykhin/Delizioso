<script setup>
//COMPONENTS
import MenuCategory from "@/components/menuCategory/menuCategory.vue";
import CardList from "@/components/cardList.vue";
import ListPagination from "@/components/menuProducts/assets/listPagination.vue";
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="menu">
        <h1 class="menu__title">
          <slot></slot>
        </h1>

        <div class="menu__content">
          <MenuCategory/>
          <CardList/>
        </div>

        <list-pagination/>
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

.menu {
  display: flex;
  flex-direction: column;
  gap: 7rem;

  &__title {
    font-size: 5.7rem;
    color: $black;
    font-weight: $fw_700;
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4.2rem;
  }
}
</style>