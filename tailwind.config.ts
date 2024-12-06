import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx,}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1200px',
            },
        },
        extend: {
            screens: {
                xs: '320px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },

    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    ...themes['light'],
                    primary: 'blue',
                    secondary: 'teal',
                },
            },
        ],
    },
};
export default config;
