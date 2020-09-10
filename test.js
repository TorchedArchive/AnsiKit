const ansikit = require('./');

const text = ansikit.format('{underline}Hello {red}world!')
console.log(text)