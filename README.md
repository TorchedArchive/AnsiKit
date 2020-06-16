# ansiplace
Replace tags in any string with ansi color codes.  

It's a very small and simple package that replaces tags (`{reset}`, `{blue}`) to ANSI color codes.  
It doesn't check if the terminal supports color. You have to do that yourself.  

# Installation
`npm i ansiplace --save`
 
# Documentation
## Example
```js
const ansiplace = require("ansiplace")

const text = ansiplace("{underline}Hello {red}world!")
console.log(text)
```  
There is a rainbow example in [rainbow.js](https://github.com/Terminalfreaks/ansiplace/blob/master/rainbow.js).
  
**`ansiplace(text)`**  
The main and only function, which returns `text` with the color codes.  

**`ansiplace.colors`**  
Returns an `array` of available colors, excluding white and black.  

# Styles
### Modifiers
`reset`  
`bold`  
`italic`  
`strike` or `strikethrough`  
`underline`  

### Colors
`red`  
`green`  
`yellow`  
`blue`  
`magenta`  
`cyan`  
`white`  

More will be coming soon.