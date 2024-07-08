<template>
  <div v-if="requestedPokemon">
    <h1 class="text-4xl font-bold mt-4 mb-2">{{ requestedPokemon.name }}</h1>
    <p>Pokedex No. {{ requestedPokemon.id }}</p>
    <img :src="requestedPokemon.sprite" width="150" height="150" alt="" />
    <ul>
      <li>Height: {{ requestedPokemon.height }}</li>
      <li>Weight: {{ requestedPokemon.weight }}</li>
    </ul>
    <p class="mt-2">Type(s):</p>
    <ul class="mb-2">
      <li v-for="type in requestedPokemon.types" :key="type" class="ml-2">- {{ type }}</li>
    </ul>
  </div>
  <div v-else>Loading ...</div>
</template>

<script setup lang="ts">
import { fetchPokemonById } from '@/helpers/PokemonHelpers'
import type { Pokemon } from '@/models/Pokemon.type'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

let requestedPokemon = ref<Pokemon | undefined>()

const loadPokemon = async () => {
  const result = await fetchPokemonById(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  if (result) {
    requestedPokemon.value = result
  }
}

loadPokemon()
</script>

<style scoped></style>
