# AnsiKit
> 🎨 The ultimate terminal ANSI kit.

AnsiKit is a small and simple library for setting attributes and reading information about a terminal.  
It is very convenient due to having a consistent API and coverage for every sensible ANSI code.  

AnsiKit simply prints escapes to the terminal for the user, but also results in cleaner looking code.  
Note: If a terminal is not xterm-compatible some functions may not work as intended or just won't work at all.  
(For example the standard Windows `cmd`, but [Windows Terminal](https://github.com/microsoft/terminal) should have better results.)

# Install
`npm install ansikit`
 
# Example
```js
const ansikit = require('ansikit');

// The format function takes color tags and replaces it with color codes.
const text = ansikit.format('{underline}Hello {red}world!');
console.log(text);
```

# Docs
The documentation for this library can be located [at this address.](https://luvella.github.io/AnsiKit)

# Styles
### Modifiers
`reset`  
`bold`  
`dim` or `faint`  
`italic`  
`underline`  
`invert` or `reverse`  
`strike` or `strikethrough`  

### Colors
`black`  
`red`  
`green`  
`yellow`  
`blue`  
`magenta`  
`cyan`  
`white`  

`black-bg`  
`red-bg`  
`green-bg`  
`yellow-bg`  
`blue-bg`  
`magenta-bg`  
`cyan-bg`  
`white-bg`  

`bright-black` or `grey` or `gray`  
`bright-red`  
`bright-green`  
`bright-yellow`  
`bright-blue`  
`bright-magenta`  
`bright-cyan`  