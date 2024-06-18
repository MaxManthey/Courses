<template>
  <h2>Add new Character</h2>
  <input
    placeholder="New Character"
    v-model="newCharacter"
    @keyup.enter="addCharacter()"
    class="margin-bottom"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AddCharacter',
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createCharacter: (_name: string) => true
  },
  setup(_, { emit }) {
    let newCharacter = ref<string>('')

    const addCharacter = () => {
      emit('createCharacter', newCharacter.value)
      newCharacter.value = ''
    }

    return {
      newCharacter,
      emit,
      addCharacter
    }
  }
})
</script>

<style scoped></style>
