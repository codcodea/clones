import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { createMediaQuery, makeMediaQueryListener } from '@solid-primitives/media'
import { createSignal } from 'solid-js'

// Tailwind theme breakpoint for large screens
const fullConfig = resolveConfig(tailwindConfig)
const lg = fullConfig.theme.screens.lg

// Create a signal that holds the media query
const [isMediaLG, setIsMediaLG] = createSignal(true)

// Initial breakpoint check
const init = createMediaQuery(`(min-width: ${lg})`)
setIsMediaLG(init())

// Create a listener for the media query
const clear = makeMediaQueryListener(`(min-width: ${lg})`, (e) => {
    setIsMediaLG(e.matches)
})

export { isMediaLG, clear }
