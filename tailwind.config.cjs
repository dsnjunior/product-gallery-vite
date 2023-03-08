/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      l100: ['1rem', { lineHeight: '100%', letterSpacing: '0.02em', fontWeight: '500' }],
      c100: ['0.75rem', { lineHeight: '100%', letterSpacing: '0.04em', fontWeight: '400' }],
      c200: ['1rem', { lineHeight: '162%', fontWeight: '400' }],
      p200: ['0.875rem', { lineHeight: '135%', letterSpacing: '0.01em', fontWeight: '400' }],
      p300: ['1rem', { lineHeight: '130%', letterSpacing: '0.01em', fontWeight: '400' }],
      h100: ['1.25rem', { lineHeight: '130%', letterSpacing: '0.03em', fontWeight: '600' }],
      h200: ['1.5rem', { lineHeight: '130%', letterSpacing: '-0.01em', fontWeight: '600' }],
      h300: ['2rem', { lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: '700' }],
      h400: ['2.5rem', { lineHeight: '100%', letterSpacing: '-0.02em', fontWeight: '700' }],
      h500: ['5rem', { lineHeight: '100%', letterSpacing: '-0.02em', fontWeight: '700' }],
      h600: ['7rem', { lineHeight: '100%', letterSpacing: '-0.02em', fontWeight: '700' }],
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '700',
      700: '700',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      border: '0 0 0 0.5px currentColor',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
