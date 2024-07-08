<template>
  <div v-if="pokemonStore.requestedPokemon">
    <h1 class="text-4xl font-bold mt-4 mb-2">{{ pokemonStore.requestedPokemon.name }}</h1>
    <p>Pokedex No. {{ pokemonStore.requestedPokemon.id }}</p>
    <img :src="pokemonStore.requestedPokemon.sprite" width="150" height="150" alt="" />
    <ul>
      <li>Height: {{ pokemonStore.requestedPokemon.height }}</li>
      <li>Weight: {{ pokemonStore.requestedPokemon.weight }}</li>
    </ul>
    <p class="mt-2">Type(s):</p>
    <ul class="mb-2">
      <li v-for="type in pokemonStore.requestedPokemon.types" :key="type" class="ml-2">
        - {{ type }}
      </li>
    </ul>
  </div>
  <div v-else>Loading ...</div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemonStore = usePokemonStore()

const loadPokemon = async () => {
  if (!pokemonStore.requestedPokemon || pokemonStore.requestedPokemon.id !== +route.params.id) {
    pokemonStore.fetchPokemonByUrl(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  }
}

loadPokemon()
</script>

<style scoped></style>
