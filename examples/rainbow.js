const ansiplace = require("../index")

const text = "Hello rainbow world!".split("")
const rainbow = text.map((t, i) => {
	const color = ansiplace.extras.colors[i % (ansiplace.extras.colors.length - 2)] // -2 removes black and white
	return `{${color}}${t}`
}).join("")

console.log(ansiplace(rainbow))