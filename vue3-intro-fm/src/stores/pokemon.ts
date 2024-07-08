import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { BasicPokemon, Pokemon } from '@/models/Pokemon.type'
import { transformToPokemon, upperCaseName } from '@/helpers/PokemonHelpers'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokedex = ref<BasicPokemon[]>([])
  const requestedPokemon = ref<Pokemon | undefined>()

  async function fetchPokedex() {
    if (pokedex.value.length === 0) {
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
  }

  async function fetchPokemonByUrl(url: string) {
    try {
      const response = await fetch(url)
      requestedPokemon.value = transformToPokemon(await response.json())
    } catch (e) {
      console.error(e)
    }
  }

  function hidePokemon() {
    requestedPokemon.value = undefined
  }

  return { pokedex, fetchPokedex, requestedPokemon, fetchPokemonByUrl, hidePokemon }
})
