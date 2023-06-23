const { rem, lineHeight } = require('../utils')
const fontSize = {
  xs: ['0.75rem', { lineHeight: '1' }],
  sm: ['0.875rem', { lineHeight: '1.25' }],
  base: ['1rem', { lineHeight: lineHeight(16, 29) }],
  lg: ['1.125rem'],
  xl: ['1.25rem'],
  '48':['3rem'],
  '32':['2rem'],
  '36':['2.25rem'],
  '26':['1.625rem'],
  '16':['2rem'],
  '15':['30px'],
  '25':['50px'],
  '6':['12px'],




  '2xl': ['1.5rem', { lineHeight: '1.4' }],
  '3xl': ['1.875rem', { lineHeight: '2.625' }],
  '4xl': ['2.25rem', { lineHeight: '2.5' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
  '18px': [rem(18), { lineHeight: '1.6' }],
  'h1': ['1.875rem', { lineHeight: '1.3'}],
  'h2': [rem(30), { lineHeight: '1.4' }],
  'h3': ['1.625rem', { lineHeight:'2.25rem' }],
  'h4': ['1.375rem', { lineHeight: '1.3' }],
  'h5': ['1.375rem', { lineHeight: '1.45455' }],
  'h6': ['1.125rem', { lineHeight: '1.27778' }],
  'h1-md': ['3.125rem'],
  'h2-md': ['1.875rem'],
  'h3-md': ['1.625rem'],
  'h4-md': ['1.75rem'],
  'h5-md': ['1.5rem'],
  'h6-md': ['1.25rem'],
  '40':['40px'],

  'btn': ['.875em', { lineHeight: '1.2' }]

}
module.exports = {
  fontSize
}
