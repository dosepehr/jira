import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import { PluginCreator } from 'tailwindcss/types/config';
import ppt from 'prettier-plugin-tailwindcss';
const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            }
        }
    },
    plugins: [daisyui, ppt as unknown as PluginCreator]
};
export default config;
