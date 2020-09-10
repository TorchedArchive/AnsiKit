const ansikit = require('../index')

const text = 'Hello rainbow world!'.split('')
const rainbow = text.map((t, i) => {
	const color = ansikit.extras.colors[i % 6] // The first 6 are the standard and visible colors (no bright-*, gray, black, white)
	return `{${color}}${t}`
}).join('')

console.log(ansikit.format(rainbow))