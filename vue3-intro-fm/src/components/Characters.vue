<template>
  <h1>My Characters</h1>
  <hr />
  <h2>All Characters</h2>
  <ul>
    <li v-for="character in characterList" :key="character.name">
      <div class="all-characters">
        <p>{{ character.name }}</p>
        <button @click="addFavouriteCharacter(character)">🌟 Favourite</button>
      </div>
    </li>
  </ul>
  <input v-model="newCharacter" @keyup.enter="addCharacter()" />
  <h2>Favourite Characters</h2>
  <ul>
    <li v-for="character in favouriteCharacters" :key="character.name">{{ character.name }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

type Characters = {
  name: string
}

export default defineComponent({
  name: 'StringList',
  setup() {
    const characterList = ref<Characters[]>([
      { name: 'Aang' },
      { name: 'Katara' },
      { name: 'Sokka' },
      { name: 'Toph' }
    ])
    let newCharacter = ref<string>('')
    const favouriteCharacters = ref<Characters[]>([])

    const addCharacter = () => {
      characterList.value.push({ name: newCharacter.value })
      newCharacter.value = ''
    }

    const addFavouriteCharacter = (character: Characters) => {
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
