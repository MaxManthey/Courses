<template>
  <AvatarLayout>
    <template #character-list>
      <ul class="margin-bottom">
        <li v-for="character in characterList" :key="character.name">
          <div class="all-characters">
            <p>{{ character.name }} - {{ character.element }}</p>
            <Button severity="secondary" @click="addFavouriteCharacter(character)"
              >Favourite</Button
            >
          </div>
        </li>
      </ul>
    </template>
    <template #add-character>
      <AddCharacter @createCharacter="addCharacter" />
    </template>
    <template #statistics>
      <BenderStatistics :character-list="characterList" />
    </template>
    <template #favorites>
      <p v-if="favouriteCharacters.length === 0">None yet</p>
      <ul>
        <li v-for="character in favouriteCharacters" :key="character.name">
          {{ character.name }} - {{ character.element }}
        </li>
      </ul>
    </template>
  </AvatarLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BenderStatistics from './BenderStatistics.vue'
import AddCharacter from './AddCharacter.vue'
import AvatarLayout from './AvatarLayout.vue'
import type { Character } from '@/models/Character.type'
import { Button } from '@/components/ui/button'
import { characterList } from '@/composables/useCharacterList'

const favouriteCharacters = ref<Character[]>([])

const addCharacter = (name: string) => {
  characterList.value.push({ name, element: [] })
}

const addFavouriteCharacter = (character: Character) => {
  if (!favouriteCharacters.value.map((char) => char.name).includes(character.name)) {
    favouriteCharacters.value.push(character)
  }
}
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
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}
</style>
