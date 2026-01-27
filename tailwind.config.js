/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        'mobile': '414px',
      },
      keyframes: {
        bounceIn: {
          'from, 20%, 40%, 60%, 80%, to': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '0%': {
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '40%': {
            transform: 'scale3d(0.9, 0.9, 0.9)',
          },
          '60%': {
            transform: 'scale3d(1.03, 1.03, 1.03)',
          },
          '80%': {
            transform: 'scale3d(0.97, 0.97, 0.97)',
          },
          'to': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        pop: {
          'to': {
            transform: 'scale(1)',
          },
        },
        heartbeat: {
          'to': {
            transform: 'scale(1.4)',
          },
        },
      },
      animation: {
        bounceIn: 'bounceIn 1s both',
        pop: 'pop 200ms forwards cubic-bezier(0.15, 1.05, 0.54, 1.29) 1',
        heartbeat: 'heartbeat 0.25s infinite alternate',
      },
    },
  },
  plugins: [],
};
