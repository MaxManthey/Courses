<template>
  <h2>Character Statistics</h2>
  <ul>
    <li v-for="(amount, type) in bendingSummary" :key="type">{{ type }}: {{ amount }}</li>
  </ul>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import type { Character } from '@/models/Character.type'
import { computed, defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'BenderStatistics',
  props: {
    characterList: {
      required: true,
      type: Array as PropType<Character[]>
    },
    msg: {
      type: String
    }
  },
  setup(props) {
    console.log('Test', props.characterList)
    const bendingSummary = computed(() => {
      const statistics = {
        Fire: 0,
        Water: 0,
        Earth: 0,
        Air: 0,
        None: 0
      }

      props.characterList.forEach((character) => {
        character.element.forEach((element) => {
          statistics[element]++
        })
      })

      props.characterList.forEach(({ element }) => {
        if (element.length === 0) statistics['None']++
      })

      return statistics
    })

    return {
      bendingSummary
    }
  }
})
</script>

<style scoped></style>
