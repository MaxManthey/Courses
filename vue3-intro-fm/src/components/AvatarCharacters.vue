<template>
  <h1>My Characters</h1>
  <hr />
  <h2>All Characters</h2>
  <ul>
    <li v-for="character in characterList" :key="character.name">
      <div class="all-characters">
        <p>{{ character.name }} - {{ character.element }}</p>
        <button @click="addFavouriteCharacter(character)">🌟 Favourite</button>
      </div>
    </li>
  </ul>
  <input v-model="newCharacter" @keyup.enter="addCharacter()" />
  <BenderStatistics :character-list="characterList" />
  <h2>Favourite Characters</h2>
  <ul>
    <li v-for="character in favouriteCharacters" :key="character.name">
      {{ character.name }} - {{ character.element }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BenderStatistics from './BenderStatistics.vue'
import type { Character } from '@/models/Character.type'

export default defineComponent({
  name: 'AvatarCharacters',
  components: {
    BenderStatistics
  },
  setup() {
    const characterList = ref<Character[]>([
      { name: 'Aang', element: ['Fire', 'Water', 'Earth', 'Air'] },
      { name: 'Katara', element: ['Water'] },
      { name: 'Sokka', element: [] },
      { name: 'Toph', element: ['Earth'] },
      { name: 'Zuko', element: ['Fire'] },
      { name: 'Azula', element: ['Fire'] }
    ])
    let newCharacter = ref<string>('')
    const favouriteCharacters = ref<Character[]>([])

    const addCharacter = () => {
      characterList.value.push({ name: newCharacter.value, element: [] })
      newCharacter.value = ''
    }

    const addFavouriteCharacter = (character: Character) => {
      favouriteCharacters.value.push(character)
    }

    return {
      characterList,
      newCharacter,
      favouriteCharacters,
      addCharacter,
      addFavouriteCharacter
    }
  }
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.all-characters {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
