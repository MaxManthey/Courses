<template>
  <h3 class="text-xl mt-2"><span class="font-bold">Store</span> Bending Summary:</h3>
  <ul class="margin-bottom">
    <li v-for="(amount, type) in avatarStore.bendingSummary" :key="type">
      {{ type }}{{ ELEMENT_ICON_MAP[type] }}: {{ amount }}
    </li>
  </ul>
  <h3 class="text-xl mt-2"><span class="font-bold">Props</span> Bending Summary:</h3>
  <ul class="margin-bottom">
    <li v-for="(amount, type) in propsBendingSummary" :key="type">
      {{ type }}{{ ELEMENT_ICON_MAP[type] }}: {{ amount }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ELEMENT_ICON_MAP, type Character } from '@/models/Character.type'
import { useAvatarStore } from '@/stores/avatar'
import { computed, type PropType } from 'vue'

const props = defineProps({
  characterList: {
    required: true,
    type: Array as PropType<Character[]>
  }
})

const avatarStore = useAvatarStore()

const propsBendingSummary = computed(() => {
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
