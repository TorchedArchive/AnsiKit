const ansikit = require('./src/index');

const text = ansikit.format('{underline}Hello {red}world!');
console.log(text);
