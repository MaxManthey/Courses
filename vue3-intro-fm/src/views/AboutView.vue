<template>
  <div class="about">
    <TestComponent />
  </div>
</template>

<script setup lang="ts">
import TestComponent from '../components/TestComponent.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
