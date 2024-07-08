import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Character } from '@/models/Character.type'

export const useAvatarStore = defineStore('avatar', () => {
  const characterList = ref<Character[]>([
    { name: 'Aang', element: ['Fire', 'Water', 'Earth', 'Air'] },
    { name: 'Katara', element: ['Water'] },
    { name: 'Sokka', element: [] },
    { name: 'Toph', element: ['Earth'] },
    { name: 'Zuko', element: ['Fire'] },
    { name: 'Iroh', element: ['Fire'] }
  ])

  const bendingSummary = computed(() => {
    const statistics = {
      Fire: 0,
      Water: 0,
      Earth: 0,
      Air: 0,
      None: 0
    }

    characterList.value.forEach((character) => {
      character.element.forEach((element) => {
        statistics[element]++
      })
    })

    characterList.value.forEach(({ element }) => {
      if (element.length === 0) statistics['None']++
    })

    return statistics
  })

  function addCharacter(character: Character) {
    characterList.value.push(character)
  }

  return { characterList, bendingSummary, addCharacter }
})
