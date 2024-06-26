<template>
  <h1 class="text-4xl font-bold mb-2">ATLA Characters</h1>
  <hr class="mb-4" />
  <Card class="mb-4">
    <CardHeader>
      <CardTitle>All Characters</CardTitle>
    </CardHeader>
    <CardContent>
      <slot name="character-list" />
    </CardContent>
    <CardFooter>
      <slot name="add-character" />
    </CardFooter>
  </Card>
  <Card class="mb-4">
    <CardHeader>
      <CardTitle>Character Statistics</CardTitle>
    </CardHeader>
    <CardContent>
      <slot name="statistics" />
    </CardContent>
  </Card>
  <slot name="favorites" />
</template>
<script lang="ts" setup>
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>
<style scoped></style>
