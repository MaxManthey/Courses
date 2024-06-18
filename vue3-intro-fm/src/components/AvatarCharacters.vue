<template>
  <h1>ATLA Characters</h1>
  <hr class="margin-bottom" />
  <h2>All Characters</h2>
  <ul class="margin-bottom">
    <li v-for="character in characterList" :key="character.name">
      <div class="all-characters">
        <p>{{ character.name }} - {{ character.element }}</p>
        <button @click="addFavouriteCharacter(character)">🌟 Favourite</button>
      </div>
    </li>
  </ul>
  <AddCharacter @createCharacter="addCharacter" />
  <BenderStatistics :character-list="characterList" />
  <h2 v-if="favouriteCharacters.length">Favourite Characters</h2>
  <ul>
    <li v-for="character in favouriteCharacters" :key="character.name">
      {{ character.name }} - {{ character.element }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BenderStatistics from './BenderStatistics.vue'
import AddCharacter from './AddCharacter.vue'
import type { Character } from '@/models/Character.type'

export default defineComponent({
  name: 'AvatarCharacters',
  components: {
    BenderStatistics,
    AddCharacter
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
    const favouriteCharacters = ref<Character[]>([])

    const addCharacter = (name: string) => {
      characterList.value.push({ name, element: [] })
    }

    const addFavouriteCharacter = (character: Character) => {
      if (!favouriteCharacters.value.map((char) => char.name).includes(character.name)) {
        favouriteCharacters.value.push(character)
      }
    }

    return {
      characterList,
      addCharacter,
      favouriteCharacters,
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
