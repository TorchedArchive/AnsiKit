<h1 align="center">AnsiKit</h1>

<blockquote align="center">🎨 The ultimate terminal ANSI kit.</blockquote>

<p align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg">
<br>
AnsiKit is a small and simple library for setting attributes and reading information about a terminal.  
It is very convenient due to having a consistent API and coverage for every sensible ANSI code.  

AnsiKit simply prints escapes to the terminal for the user, but also results in cleaner looking code.  
Note: If a terminal is not xterm-compatible some functions may not work as intended or just won't work at all.  
(For example the standard Windows `cmd`, but [Windows Terminal](https://github.com/microsoft/terminal) should have better results.)</p>

# Table of Contents
- [Install](#install)
- [Example](#example)
- [Styles](#styles)
- [Links](#links)
- [Contributing](#contributing)

# Install
`npm install ansikit`
 
# Example
```js
const ansikit = require('ansikit');

// The format function takes color tags and replaces it with color codes.
const text = ansikit.format('{underline}Hello {red}world!');
console.log(text);
```

# Styles
A style can be used in a format function like: `{style}` for example `{bold}`.
### Modifiers
`reset`  
`bold`  
`bold-off`  
`dim` or `faint`  
`italic`  
`underline`  
`underline-off`  
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

# Links
- Documentation: https://luvella.github.io/AnsiKit

# Contributing
If you would like to contribute, be sure to:
- Lint with our ESLint config
- Add JSDoc (if adding a new function)  
And make a pull request!  

## Developing
```sh
git clone https://github.com/Luvella/AnsiKit
cd AnsiKit
npm i
npm i eslint -g # For linting (if you don't have it installed)
# After making changes:
eslint lib/
```

If you aren't contributing code you can always open an issue.
# License
AnsiKit is licensed under the MIT license.  
[Read here](LICENSE) for more info.
