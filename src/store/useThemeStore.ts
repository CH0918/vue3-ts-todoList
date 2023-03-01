import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import { Theme, Themes } from '@/store'
export const useThemeStore = defineStore('themeStore', () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const currentThemeName = ref(isDark.value ? Theme.Dark : Theme.Light)
  const currentTheme = ref(
    Themes.find((item) => item.name === currentThemeName.value)
  )
  function changeTheme(theme: Theme) {
    const targetTheme = Themes.find((item) => item.name === theme)
    if (targetTheme) {
      targetTheme.handle()
      currentTheme
    }
  }
  return {
    isDark,
    toggleDark,
    changeTheme,
    currentTheme,
    currentThemeName,
  }
})

let globalThemeStore: ReturnType<typeof useThemeStore>
export const getGlobalStore = () => {
  if (!globalThemeStore) {
    globalThemeStore = useThemeStore()
  }
  return globalThemeStore
}
