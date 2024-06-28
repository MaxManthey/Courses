<template>
  <ul class="margin-bottom">
    <li v-for="(amount, type) in bendingSummary" :key="type">{{ type }}: {{ amount }}</li>
  </ul>
</template>

<script setup lang="ts">
import type { Character } from '@/models/Character.type'
import { computed, type PropType } from 'vue'

const props = defineProps({
  characterList: {
    required: true,
    type: Array as PropType<Character[]>
  }
})

const bendingSummary = computed(() => {
  const statistics = {
    Fire: 0,
    Water: 0,
    Earth: 0,
    Air: 0,
    None: 0
  }

  props.characterList.forEach((character) => {
    character.element.forEach((element) => {
      statistics[element]++
    })
  })

  props.characterList.forEach(({ element }) => {
    if (element.length === 0) statistics['None']++
  })

  return statistics
})
</script>

<style scoped></style>
