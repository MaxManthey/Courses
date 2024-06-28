<template>
  <Input
    class="max-w-xs"
    placeholder="New Character"
    v-model="newCharacter"
    @keyup.enter="addCharacter()"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const emit = defineEmits<{
  (e: 'createCharacter', name: string): void
}>()

let newCharacter = ref<string>('')

const addCharacter = () => {
  emit('createCharacter', newCharacter.value)
  newCharacter.value = ''
}
</script>

<style scoped></style>
