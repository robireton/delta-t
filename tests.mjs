import assert from 'assert'
import computeΔT from './delta-t'

// are the polynomials producing the expected estimates?
for (const test of [
  { year: -752, month: 4, expected: 21149 },
  { year: 0, month: 1, expected: 10583 },
  { year: 1066, month: 10, expected: 1235 },
  { year: 1685, month: 3, expected: 12 },
  { year: 1750, month: 7, expected: 13 },
  { year: 1830, month: 1, expected: 7.7 },
  { year: 1880, month: 1, expected: -5 },
  { year: 1910, month: 1, expected: 10.4 },
  { year: 1930, month: 6, expected: 24.1 },
  { year: 1950, month: 6, expected: 29.3 },
  { year: 1972, month: 3, expected: 42.5 },
  { year: 1995, month: 6, expected: 61.17 },
  { year: 2027, month: 6, expected: 76 },
  { year: 2100, month: 1, expected: 202.8 },
  { year: 2200, month: 1, expected: 442 }
]) {
  assert.strictEqual(computeΔT(test.year, test.month), test.expected)
}
console.log('polynomial output OK')

// do the polynomial estimates match the historical estimates well enough?
// c.f. table 2 on https://eclipse.gsfc.nasa.gov/SEhelp/deltat2004.html#tab1
for (const test of [
  { year: -500, ΔT: 17190, error: 430 },
  { year: -400, ΔT: 15530, error: 390 },
  { year: -300, ΔT: 14080, error: 360 },
  { year: -200, ΔT: 12790, error: 330 },
  { year: -100, ΔT: 11640, error: 290 },
  { year: 0, ΔT: 10580, error: 260 },
  { year: 100, ΔT: 9600, error: 240 },
  { year: 200, ΔT: 8640, error: 210 },
  { year: 300, ΔT: 7680, error: 180 },
  { year: 400, ΔT: 6700, error: 160 },
  { year: 500, ΔT: 5710, error: 140 },
  { year: 600, ΔT: 4740, error: 120 },
  { year: 700, ΔT: 3810, error: 100 },
  { year: 800, ΔT: 2960, error: 80 },
  { year: 900, ΔT: 2200, error: 70 },
  { year: 1000, ΔT: 1570, error: 55 },
  { year: 1100, ΔT: 1090, error: 40 },
  { year: 1200, ΔT: 740, error: 30 },
  { year: 1300, ΔT: 490, error: 20 },
  { year: 1400, ΔT: 320, error: 20 },
  { year: 1500, ΔT: 200, error: 20 },
  { year: 1600, ΔT: 120, error: 20 },
  { year: 1700, ΔT: 9, error: 5 },
  { year: 1750, ΔT: 13, error: 2 },
  { year: 1800, ΔT: 14, error: 1 },
  { year: 1850, ΔT: 7, error: 1 },
  { year: 1900, ΔT: -3, error: 1 },
  { year: 1950, ΔT: 29, error: 0.1 }
]) {
  const ΔT = computeΔT(test.year, 0)
  const σ = Math.abs(ΔT - test.ΔT)
  assert.ok(σ < Math.sqrt(test.error), `computed ΔT for ${test.year} (${ΔT}) deviates from observered value (${test.ΔT})`)
}
console.log('consistency with historical estimates OK')

// do the estimates match the observations well enough?
// c.f. table 2 on https://eclipse.gsfc.nasa.gov/SEhelp/deltat2004.html#tab2
for (const test of [
  { year: 1955, ΔT: 31.1 },
  { year: 1960, ΔT: 33.2 },
  { year: 1965, ΔT: 35.7 },
  { year: 1970, ΔT: 40.2 },
  { year: 1975, ΔT: 45.5 },
  { year: 1980, ΔT: 50.5 },
  { year: 1985, ΔT: 54.3 },
  { year: 1990, ΔT: 56.9 },
  { year: 1995, ΔT: 60.8 },
  { year: 2000, ΔT: 63.8 },
  { year: 2005, ΔT: 64.7 }
]) {
  const ΔT = computeΔT(test.year, 0)
  const σ = Math.abs(ΔT - test.ΔT)
  assert.ok(σ < 0.11, `computed ΔT for ${test.year} (${ΔT}) deviates from observered value (${test.ΔT})`)
}
console.log('consistency with observed values OK')
