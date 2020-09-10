const ansikit = require('./src/index');

ansikit.reset().cursorDown(-1).print('{underline}Hello {red}world!').cursorUp(-1);
