# AnsiKit
> 🎨 The ultimate ANSI escape code kit.

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
(`AnsiKit` in this instance would be whatever you defined the package as)

## AnsiKit.format(text)
Default: `''`  
Formats the `text`, replacing instances of `{tag}` (for example `{red}`) with the equivalent color code.  
All available tags are listed at the [Styles.](#styles)

## AnsiKit.reset()
Triggers a full reset of the terminal to its original state (mostly).  
This may include: reset colors, clear screen, reset to default font, and more.

## AnsiKit.saveState()
Saves the current state of the terminal (cursor position, certain attributes, etc).

## AnsiKit.restoreState()
Restores the most recently saved state.

## AnsiKit.eScreen()
Fills the screen with E's

## AnsiKit.cursorUp(x)
Default: `1`  
Moves the cursor up `x` amount of lines.  
If `x` is -1, then it will move the cursor up the amount of lines in the terminal.

## AnsiKit.cursorDown(x)
Default: `1`  
Moves the cursor down `x` amount of lines.  
If `x` is -1, then it will move the cursor down the amount of lines in the terminal.

## AnsiKit.print(text)
Default: `''`  
[Formats](#ansikitformattext) text, then prints it.

## AnsiKit.println(text)
Default: `'\n'`  
[Formats](#ansikitformattext) text, then prints it and adds a newline.

## AnsiKit.setTitle(text)
Default: `' '`  
Sets the terminal window's title.

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