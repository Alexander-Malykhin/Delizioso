<script setup>
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
//SETTINGS
import {menuList} from "@/components/menuCategory/settings/menuList.js";
//COMPONENTS
import MenuCategoryItem from "@/components/menuCategory/menuCategoryItem.vue";

const route = useRoute()
const menuItems = ref(menuList);

const isActiveCategory = computed(() => route.query.category || 'all')
</script>

<template>
  <div class="category">
    <menu-category-item
        :items="menuItems"
        :isActiveCategory="isActiveCategory"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@scss/settings/colors' as *;
@use '@scss/settings/fonts' as *;

.category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>