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
      // colors: {
      //   primary:    "#1d583f",
      //   secondary:  "#f4f0ec"
      // }
    },
    fontFamily: {
      sans:   [
        // 'JetBrains Mono',
        'Open Sans',
        // 'var(--font-calibri-medium)',
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
      adora:  [
        'var(--font-adora)', 
      ],
    },

  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        kercambre: {
          primary:    "#1d583f",
          secondary:  "#f4f0ec",
          // "accent": "#f966c6",
          // "neutral": "#222630",
          // "base-100": "#294351",
          // "info": "#46a1e2",
          // "success": "#1a9385",
          // "warning": "#a86610",
          // "error": "#f6553c",
        },
      }
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
