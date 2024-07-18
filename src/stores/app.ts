import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isToken = ref(false)
  const menuActive = ref<string>('/home')

  return { menuActive, isToken }
})
