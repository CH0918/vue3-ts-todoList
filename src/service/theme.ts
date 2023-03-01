import { getGlobalStore } from '@/store'
export enum Theme {
  Dark = 'dark',
  Light = 'light',
}
export interface ThemeItem {
  id?: number
  name: Theme
  color?: string
  handle: () => void
}
export const Themes: ThemeItem[] = [
  {
    name: Theme.Dark,
    handle: () => {
      getGlobalStore().toggleDark(true)
    },
  },
  {
    name: Theme.Light,
    handle: () => {
      getGlobalStore().toggleDark(false)
    },
  },
]
