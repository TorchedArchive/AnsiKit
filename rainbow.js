const ansiplace = require("./index")

const text = "Hello rainbow world!".split("")
const rainbow = text.map((t, i) => {
	const color = ansiplace.colors[i % ansiplace.colors.length]
	return `{${color}}${t}`
}).join("")

console.log(ansiplace(rainbow))