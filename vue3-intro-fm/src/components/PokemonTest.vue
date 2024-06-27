<template>
  <div class="pokemon-wrapper">
    <Card v-for="pokemon in pokedex.results" :key="pokemon.name" class="">
      <CardHeader>
        <CardTitle>{{ upperCaseName(pokemon.name) }}</CardTitle>
      </CardHeader>
      <CardContent v-if="pokemon.name === requestedPokemon.name">
        <p>Pokedex No. {{ requestedPokemon.id }}</p>
        <img :src="requestedPokemon.sprites.front_default" alt="" />
        <ul>
          <li>Height: {{ requestedPokemon.height }}</li>
          <li>Weight: {{ requestedPokemon.weight }}</li>
        </ul>
        <p class="mt-2">Type(s):</p>
        <ul>
          <li v-for="type in requestedPokemon.types" :key="type.slot" class="ml-2">
            - {{ upperCaseName(type.type.name) }}
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button @click="fetchPokemon(pokemon.url)">Learn more</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

let pokedex = ref<any>({})
let requestedPokemon = ref<any>({ sprites: { front_default: '' } })

async function fetchPokedex() {
  pokedex.value = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) =>
    response.json()
  )
}

async function fetchPokemon(url: string) {
  requestedPokemon.value = await fetch(url).then((response) => response.json())
}

function upperCaseName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

fetchPokedex()
</script>

<style scoped>
.pokemon-wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
}
</style>
