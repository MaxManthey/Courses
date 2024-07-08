export type Character = {
  name: string
  element: Elements
}

export type Elements = Array<'Fire' | 'Water' | 'Earth' | 'Air'>

export const ELEMENT_ICON_MAP = {
  Fire: '🔥',
  Water: '💦',
  Earth: '🌍',
  Air: '💨',
  None: '🙅‍♂️'
}
