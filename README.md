# delta-t
ES6 module to compute estimates of [ΔT](https://en.wikipedia.org/wiki/%CE%94T) — the difference between local/civil time and uniform/dynamical time — using algorithms from [NASA - Polynomial Expressions for Delta T](https://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html). Also see Chapter 9, “Dynamical Time and Universal Time,” of [_Astronomical Algorithms_ by Jean Meeus](https://www.willbell.com/math/MC1.HTM).

## install
```sh
$ npm install @robireton/delta-t
```

## Syntax

### computeΔT( _year_, _month_ )

#### parameters
`year`: the year as a number

`month`: the number of the month (January = 1, February = 2, etc.)

#### returns
value of ΔT in seconds

#### example
```js
import computeΔT from '@robireton/delta-t'

computeΔT(1971, 10)
// => 42
```
