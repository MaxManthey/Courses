<template>
  <Input
    class="max-w-xs"
    placeholder="New Character"
    v-model="newCharacter"
    @keyup.enter="addCharacter()"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Input } from '@/components/ui/input'

export default defineComponent({
  name: 'AddCharacter',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Input
  },
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
