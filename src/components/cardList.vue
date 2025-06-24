<script setup>
//COMPONENTS
import Card from "@/components/card/card.vue";
</script>

<template>
  <div class="list">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 2.8rem;
}
</style>