import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        primary: { value: 'hsl(337,79%,60%)' },
        primaryLight: { value: 'hsl(337,79%,70%)' },
        primaryDark: { value: 'hsl(337,79%,50%)' },
      },
    },
  },
})