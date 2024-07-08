<template>
  <div
    class="pokemon-wrapper mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
  >
    <Card v-for="pokemon in pokemonStore.pokedex" :key="pokemon.name">
      <CardHeader>
        <CardTitle>{{ pokemon.name }}</CardTitle>
      </CardHeader>
      <CardContent
        v-if="pokemonStore.requestedPokemon && pokemon.name === pokemonStore.requestedPokemon.name"
      >
        <p>Pokedex No. {{ pokemonStore.requestedPokemon.id }}</p>
        <img :src="pokemonStore.requestedPokemon.sprite" alt="" />
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
        <RouterLink :to="'/pokemon/' + pokemonStore.requestedPokemon.id" class="underline"
          >Details</RouterLink
        >
      </CardContent>
      <CardFooter>
        <Button
          v-if="pokemon.name !== pokemonStore.requestedPokemon?.name"
          @click="pokemonStore.fetchPokemonByUrl(pokemon.url)"
        >
          Show more
        </Button>
        <Button v-else @click="pokemonStore.hidePokemon()"> Hide </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RouterLink } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()

pokemonStore.fetchPokedex()
</script>

<style scoped></style>
