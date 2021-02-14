// c.f. http://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
// polynomials computed with Horner’s method as described in Chapter 1 of Astronomical Algorithms by Jean Meeus
export default function computeΔT (year, month) {
  const y = month > 0 ? year + (month - 0.5) / 12 : year

  if (year < -500) {
    const u = (year - 1820) / 100
    return Math.round(-20 + 32 * u * u)
  }

  if (year < 500) {
    const u = y / 100
    return Math.round(10583.6 + u * (-1014.41 + u * (33.78311 + u * (-5.952053 + u * (-0.1798452 + u * (0.022174192 + u * 0.0090316521))))))
  }

  if (year < 1600) {
    const u = (y - 1000) / 100
    return Math.round(1574.2 + u * (-556.01 + u * (71.23472 + u * (0.319781 + u * (-0.8503463 + u * (-0.005050998 + u * 0.0083572073))))))
  }

  if (year < 1700) {
    const t = y - 1600
    return Math.round(120 + t * (-0.9808 + t * (-0.01532 + t / 7129)))
  }

  if (year < 1800) {
    const t = y - 1700
    return Math.round(8.83 + t * (0.1603 + t * (-0.0059285 + t * (0.00013336 - t / 1174000))))
  }

  if (year < 1860) {
    const t = y - 1800
    return Math.round((13.72 + t * (-0.332447 + t * (0.0068612 + t * (0.0041116 + t * (-0.00037436 + t * (0.0000121272 + t * (-0.0000001699 + t * 0.000000000875))))))) * 10) / 10
  }

  if (year < 1900) {
    const t = y - 1860
    return Math.round((7.62 + t * (0.5737 + t * (-0.251754 + t * (0.01680668 + t * (-0.0004473624 + t / 233174))))) * 10) / 10
  }

  if (year < 1920) {
    const t = y - 1900
    return Math.round((-2.79 + t * (1.494119 + t * (-0.0598939 + t * (0.0061966 - t * 0.000197)))) * 10) / 10
  }

  if (year < 1941) {
    const t = y - 1920
    return Math.round((21.20 + t * (0.84493 + t * (-0.076100 + t * 0.0020936))) * 10) / 10
  }

  if (year < 1961) {
    const t = y - 1950
    return Math.round((29.07 + t * (0.407 + t * (-1 / 233 + t / 2547))) * 10) / 10
  }

  if (year < 1986) {
    const t = y - 1975
    return Math.round((45.45 + t * (1.067 + t * (-1 / 260 - t / 718))) * 10) / 10
  }

  if (year < 2005) {
    const t = y - 2000
    return Math.round((63.86 + t * (0.3345 + t * (-0.060374 + t * (0.0017275 + t * (0.000651814 + t * 0.00002373599))))) * 100) / 100
  }

  if (year < 2050) {
    const t = y - 2000
    return Math.round((62.92 + t * (0.32217 + t * 0.005589)) * 10) / 10
  }

  if (year < 2150) {
    return Math.round((-20 + 32 * Math.pow((y - 1820) / 100, 2) - 0.5628 * (2150 - y)) * 10) / 10
  }

  const u = (year - 1820) / 100
  return Math.round(-20 + 32 * u * u)
}
