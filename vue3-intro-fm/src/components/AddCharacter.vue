<template>
  <div>
    <Input
      class="max-w-xs"
      placeholder="New Character"
      v-model="newCharacter"
      @keyup.enter="addCharacter()"
    />

    <div class="flex mt-4">
      <div class="mr-4 items-center flex gap-x-2" v-for="element in elements" :key="element">
        <Checkbox
          :id="element"
          :value="element"
          :checked="isChecked(element)"
          @click="handleChange(element)"
        />
        <Label for="fire">{{ element }}</Label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import type { Character, Elements } from '@/models/Character.type'

const emit = defineEmits<{
  (e: 'createCharacter', character: Character): void
}>()

const elements: Elements = ['Fire', 'Water', 'Earth', 'Air']

let newCharacter = ref<string>('')
const checkedElements = ref<Array<'Fire' | 'Water' | 'Earth' | 'Air'>>([])

const isChecked = (value: 'Fire' | 'Water' | 'Earth' | 'Air') => {
  console.log('isChecked', value)
  return checkedElements.value.includes(value)
}

const handleChange = (value: 'Fire' | 'Water' | 'Earth' | 'Air') => {
  if (!isChecked(value)) {
    checkedElements.value.push(value)
  } else {
    checkedElements.value = checkedElements.value.filter((item) => item !== value)
  }
}

const addCharacter = () => {
  emit('createCharacter', { name: newCharacter.value, element: checkedElements.value })
  newCharacter.value = ''
}
</script>

<style scoped></style>
