/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#1d583f",
        secondary: "#f4f0ec"
      }
    },
    fontFamily: {
      sans:   [
        'var(--font-openSans)',
        'sans-serif'
      ],
      mono:   [
        'JetBrains Mono', 
        'monospace'
      ],
      serif:  [
        'var(--font-silk-medium)', 
        'serif'
      ],
      italic:  [
        'var(--font-cambria-italic)', 
      ],
    }
  },
  plugins: [
  ],
}
