import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
	{
		// Disable detecting slices that have just one reference or no references to them at all.
    files: ['./src/**'],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
])