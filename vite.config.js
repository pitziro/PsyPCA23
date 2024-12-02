import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
	plugins: [
		react(),
		Unfonts({
			custom: {
				// display: 'swap',
				families: {
					Poppins: {
						src: './src/assets/fonts/Poppins-Regular.otf',
						transform(font) {
							if (font.basename === 'Poppins-Bold') font.weight = 700

							return font
						},
					},
				},
			},
			display: 'auto',
			preload: true,
			prefetch: false,
			injectTo: 'head-prepend',
		}),
	],
})
