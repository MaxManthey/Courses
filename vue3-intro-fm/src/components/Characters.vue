<template>
  <h1>My Characters</h1>
  <hr />
  <h2>All Characters</h2>
  <ul>
    <li v-for="character in characterList" :key="character.name">
      <div class="all-characters">
        <p>{{ character.name }} - {{ character.bending }}</p>
        <button @click="addFavouriteCharacter(character)">🌟 Favourite</button>
      </div>
    </li>
  </ul>
  <input v-model="newCharacter" @keyup.enter="addCharacter()" />
  <h2>Character Statistics</h2>
  <ul>
    <li v-for="(amount, type) in bendingSummary" :key="type">{{ type }}: {{ amount }}</li>
  </ul>
  <h2>Favourite Characters</h2>
  <ul>
    <li v-for="character in favouriteCharacters" :key="character.name">
      {{ character.name }} - {{ character.bending }}
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

type Characters = {
  name: string
  element: Array<'Fire' | 'Water' | 'Earth' | 'Air'>
  bending: 'avatar' | 'Fire' | 'Water' | 'Earth' | 'Air' | 'none'
}

export default defineComponent({
  name: 'ATLA Characters',
  setup() {
    const characterList = ref<Characters[]>([
      { name: 'Aang', bending: 'avatar', element: ['Fire', 'Water', 'Earth', 'Air'] },
      { name: 'Katara', bending: 'Water', element: ['Water'] },
      { name: 'Sokka', bending: 'none', element: [] },
      { name: 'Toph', bending: 'Earth', element: ['Earth'] },
      { name: 'Zuko', bending: 'Fire', element: ['Fire'] },
      { name: 'Azula', bending: 'Fire', element: ['Fire'] }
    ])
    let newCharacter = ref<string>('')
    const favouriteCharacters = ref<Characters[]>([])

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

    const addCharacter = () => {
      characterList.value.push({ name: newCharacter.value, bending: 'none', element: [] })
      newCharacter.value = ''
    }

    const addFavouriteCharacter = (character: Characters) => {
      favouriteCharacters.value.push(character)
    }

    return {
      characterList,
      newCharacter,
      favouriteCharacters,
      bendingSummary,
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
