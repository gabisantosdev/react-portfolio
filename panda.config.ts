import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  globalCss: {
    html: {
      scrollbarWidth: 'thin',
      scrollbarColor: 'token(colors.gabiBlue.600) transparent'
    }
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          gabiZinc: {
            50: { value: 'oklch(98.5% 0.002 247.839)' },
            100: { value: 'oklch(96.7% 0.003 264.542)' },
            200: { value: 'oklch(92.8% 0.006 264.531)' },
            300: { value: 'oklch(87.1% 0.01 258.338)' },
            400: { value: 'oklch(70.7% 0.022 261.325)' },
            500: { value: 'oklch(55.2% 0.016 285.938)' },
            600: { value: 'oklch(44.2% 0.017 285.786)' },
            700: { value: 'oklch(37% 0.013 285.805)' },
            800: { value: 'oklch(27.4% 0.006 286.033)' },
            900: { value: 'oklch(21% 0.006 285.885)' },
            950: { value: 'oklch(14.1% 0.005 285.823)' },
          },

          gabiBlue: {
            50: { value: 'oklch(97% 0.014 254.604)' },
            100: { value: 'oklch(93.2% 0.032 255.585)' },
            200: { value: 'oklch(88.2% 0.059 254.128)' },
            300: { value: 'oklch(80.9% 0.105 251.813)' },
            400: { value: 'oklch(70.7% 0.165 254.624)' },
            500: { value: 'oklch(62.3% 0.214 259.815)' },
            600: { value: 'oklch(54.6% 0.245 262.881)' },
            700: { value: 'oklch(48.8% 0.243 264.376)' },
            800: { value: 'oklch(42.4% 0.199 265.638)' },
            900: { value: 'oklch(37.9% 0.146 265.522)' },
            950: { value: 'oklch(28.2% 0.091 267.935)' },
          },
        }
      }
    },
  },
  outdir: "styled-system",
})
