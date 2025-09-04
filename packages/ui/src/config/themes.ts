import { createThemes } from 'tamagui'
import { makeSemanticTheme, makeDarkSemanticTheme } from './theme-utils'

// Helper functions to access token values
const gray = (n: number) => `$gray${n}` as const
const brand = (n: number) => `$brand${n}` as const
const red = (n: number) => `$red${n}` as const
const green = (n: number) => `$green${n}` as const
const yellow = (n: number) => `$yellow${n}` as const

// Create semantic themes
const lightTheme = makeSemanticTheme(gray, brand, red, green, yellow)
const darkTheme = makeDarkSemanticTheme(gray, brand, red, green, yellow)

export const { themes } = createThemes({
  light: lightTheme,
  dark: darkTheme,
})

export type Themes = typeof themes
