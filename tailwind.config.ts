import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx,}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            }
        }
    },
    plugins: [daisyui]
};
export default config;
