import type { Character } from '@/models/Character.type'
import { ref } from 'vue'

export const characterList = ref<Character[]>([
  { name: 'Aang', element: ['Fire', 'Water', 'Earth', 'Air'] },
  { name: 'Katara', element: ['Water'] },
  { name: 'Sokka', element: [] },
  { name: 'Toph', element: ['Earth'] },
  { name: 'Zuko', element: ['Fire'] },
  { name: 'Iroh', element: ['Fire'] }
])
