
// How to load in modules
const Scene = require('Scene')
const Patches = require('Patches')

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics')
// @ts-ignore
var number = Scene.root.find('number')
var score = Patches.getScalarValue('score')
var gameOver = Patches.getPulseValue('gameOver')
var gamePlay = Patches.getPulseValue('gamePlay')

// Display score number
number.text = score.toString()

// setting Defaults
Patches.setBooleanValue('start', true)
Patches.setBooleanValue('reset', false)

// Switch state
gameOver.subscribe(function () {
  Patches.setBooleanValue('start', false)
  Patches.setBooleanValue('reset', true)
})

gamePlay.subscribe(function () {
  Patches.setBooleanValue('start', true)
  Patches.setBooleanValue('reset', false)
})
