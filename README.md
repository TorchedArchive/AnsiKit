# AnsiKit
> 🎨 The ultimate terminal ANSI kit.

AnsiKit assists you with using ANSI escape codes for things like colors, moving the cursor, changing the terminal window name and others.  
This package under the hood just prints specific codes, but also makes life a bit easier.

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