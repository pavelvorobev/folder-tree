<template>
  <div>
    <UiFoldersTree :data="dataStub.root" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TreeData } from '@/common/types/types'
import UiFoldersTree from '@/common/ui/UiFoldersTree.vue'

defineOptions({
  name: 'HomePage',
})

const dataStub = ref<TreeData>({
  root: {
    movies: {
      type: 'folder',
      children: {
        Avengers: {
          type: 'folder',
          children: {
            'Infinity War': { type: 'file' },
            Endgame: { type: 'file' },
          },
        },
        'Spider-Man': {
          type: 'folder',
          children: {
            Homecoming: { type: 'file' },
            'No Way Home': { type: 'file' },
          },
        },
        'Iron Man': { type: 'file' },
        'Doctor Strange': { type: 'file' },
      },
    },
    comics: {
      type: 'folder',
      children: {
        'X-Men': {
          type: 'folder',
          children: {
            'Dark Phoenix Saga': { type: 'file' },
            'Days of Future Past': { type: 'file' },
          },
        },
        'Fantastic Four': {
          type: 'folder',
          children: {
            'Galactus Trilogy': { type: 'file' },
            'The Coming of Galactus': { type: 'file' },
          },
        },
        'Captain America': { type: 'file' },
        'Black Panther': { type: 'file' },
      },
    },
  },
})
</script>

<style scoped>

</style>
