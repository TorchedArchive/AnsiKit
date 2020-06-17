# ansiplace
It's a very small and simple package that replaces tags (`{reset}`, `{blue}`) to ANSI color codes.  
It doesn't check if the terminal supports color. You have to do that yourself.  

# Installation
`npm install ansiplace --save`
 
# Documentation
## Example
```js
const ansiplace = require("ansiplace")

const text = ansiplace("{underline}Hello {red}world!")
console.log(text)
```  
There is a rainbow example in [rainbow.js](https://github.com/Terminalfreaks/ansiplace/blob/master/examples/rainbow.js).
  
**`ansiplace(text)`**  
The main and only function, which returns `text` with the color codes.  

**`ansiplace.extras`**  
An `object` of extra things, like all colors and all styles.  
- `ansiplace.extras.colors` - All colors (red, green, blue, etc.)
- `ansiplace.extras.styles` - All styles (bold, underline, etc) and colors

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

More will be coming soon.

# Changelog

## 1.1.0  
## Added
- This changelog
- Showcase example
- Background colors
- `dim` and `invert` modifiers
- Array of available styles (`ansiplace.extras.styles`)

## Changed
- Some newlines in README
- `ansiplace.colors` => `ansiplace.extras.colors`
- Include black and white in `ansiplace.extras.colors`
