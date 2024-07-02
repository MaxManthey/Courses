<template>
  <div>
    <h2 class="mt-4 text-2xl font-bold">Character List Composable test</h2>
    <ul class="mt-2">
      <li v-for="character in characterList" :key="character.name">
        <div class="all-characters">
          <p>{{ character.name }} - {{ character.element }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { characterList } from '@/composables/useCharacterList'
</script>
<style scoped></style>
