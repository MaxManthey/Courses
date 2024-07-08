import type { Pokemon } from '@/models/Pokemon.type'

export async function fetchPokemonById(url: string) {
  try {
    const response = await fetch(url)
    return transformToPokemon(await response.json())
  } catch (e) {
    console.error(e)
  }
}

function transformToPokemon(data: any): Pokemon {
  return {
    id: data.id,
    name: upperCaseName(data.name),
    sprite: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type: any) => upperCaseName(type.type.name))
  }
}

export function upperCaseName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
