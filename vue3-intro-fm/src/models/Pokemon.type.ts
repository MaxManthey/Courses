export interface Pokemon {
  id: number
  name: string
  sprite?: string
  height: number
  weight: number
  types: string[]
}

export interface BasicPokemon {
  name: string
  url: string
}
