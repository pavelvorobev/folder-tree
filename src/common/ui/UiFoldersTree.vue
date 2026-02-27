<template>
  <ul>
    <li v-for="key in dataKeys" :key="key" class="folder-item">
      <button @click="toggleFolder(key)" class="folder-item__head">
        <span v-if="data[key]?.type === 'folder'">📁</span>
        <span v-else> 📄 </span>
        {{ key }}
      </button>
      <template v-if="data[key]?.type === 'folder' && data[key].children">
        <UiFoldersTree v-show="openedFolders.has(key)" :data="data[key].children" />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TreeNode } from '@/common/types/types'
import UiFoldersTree from '@/common/ui/UiFoldersTree.vue'
import { ref } from 'vue'

const props = defineProps<{
  data: Record<string, TreeNode>
}>()

const dataKeys = Object.keys(props.data)
const openedFolders = ref<Set<string>>(new Set())

const toggleFolder = (value: string): void => {
  if (openedFolders.value.has(value)) {
    openedFolders.value.delete(value)
  } else {
    openedFolders.value.add(value)
  }
}
</script>

<style lang="scss" scoped>
.folder-item__head {
  display: flex;
  gap: 8px;
  padding: 6px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(236, 230, 230);
  }
}

ul {
  list-style: none;
  padding-left: 16px;
}
</style>
