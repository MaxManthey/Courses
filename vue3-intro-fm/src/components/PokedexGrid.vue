<template>
  <div
    class="pokemon-wrapper mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
  >
    <Card v-for="pokemon in pokedex" :key="pokemon.name">
      <CardHeader>
        <CardTitle>{{ pokemon.name }}</CardTitle>
      </CardHeader>
      <CardContent v-if="requestedPokemon && pokemon.name === requestedPokemon.name">
        <p>Pokedex No. {{ requestedPokemon.id }}</p>
        <img :src="requestedPokemon.sprite" alt="" />
        <ul>
          <li>Height: {{ requestedPokemon.height }}</li>
          <li>Weight: {{ requestedPokemon.weight }}</li>
        </ul>
        <p class="mt-2">Type(s):</p>
        <ul class="mb-2">
          <li v-for="type in requestedPokemon.types" :key="type" class="ml-2">- {{ type }}</li>
        </ul>
        <RouterLink :to="'/pokemon/' + requestedPokemon.id" class="underline">Details</RouterLink>
      </CardContent>
      <CardFooter>
        <Button v-if="pokemon.name !== requestedPokemon?.name" @click="loadPokemon(pokemon.url)">
          Show more
        </Button>
        <Button v-else @click="hidePokemon()"> Hide </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RouterLink, useRouter } from 'vue-router'
import type { BasicPokemon, Pokemon } from '@/models/Pokemon.type'
import { fetchPokemonById, upperCaseName } from '@/helpers/PokemonHelpers'

const router = useRouter()

let pokedex = ref<BasicPokemon[]>([])
let requestedPokemon = ref<Pokemon | undefined>()

watch(requestedPokemon, () => {
  if (requestedPokemon.value?.name === 'Bulbasaur') {
    console.log('My favorite Pokemon 😍')
    router.push('/pokemon/' + requestedPokemon.value.id)
  }
})

async function fetchPokedex() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const results: BasicPokemon[] = (await response.json()).results
    pokedex.value = results.map((pokemon) => ({
      name: upperCaseName(pokemon.name),
      url: pokemon.url
    }))
  } catch (e) {
    console.error(e)
  }
}

async function loadPokemon(url: string) {
  const result = await fetchPokemonById(url)
  if (result) {
    requestedPokemon.value = result
  }
}

function hidePokemon() {
  requestedPokemon.value = undefined
}

fetchPokedex()
</script>

<style scoped></style>
