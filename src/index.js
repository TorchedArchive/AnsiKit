const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'grey', 'bright-red', 'bright-green', 'bright-yellow', 'bright-blue', 'bright-magenta', 'bright-cyan', 'black', 'white']
const bgColors = ['red-bg', 'green-bg', 'yellow-bg', 'blue-bg', 'magenta-bg', 'cyan-bg', 'white-bg']

class AnsiKit {
	static get extras() {
		return {
			colors,
			styles: ['reset', 'bold', 'dim', 'italic', 'underline', 'invert', 'strikethrough', ...colors, ...bgColors]
		}
	}
	static format(text) {
		const _colors = {
			'{reset}': '\u001b[0m',
			'{bold}': '\u001b[1m',
			'{dim}|{faint}': '\u001b[2m',
			'{italic}': '\u001b[3m',
			'{underline}': '\u001b[4m',
			'{invert}|{reverse}': '\u001b[7m',
			'{strike}|{strikethrough}': '\u001b[9m',
			'{black}': '\u001b[30m',
			'{red}': '\u001b[31m',
			'{green}': '\u001b[32m',
			'{yellow}': '\u001b[33m',
			'{blue}': '\u001b[34m',
			'{magenta}': '\u001b[35m',
			'{cyan}': '\u001b[36m',
			'{white}': '\u001b[37m',
			'{red-bg}': '\u001b[41m',
			'{green-bg}': '\u001b[42m',
			'{yellow-bg}': '\u001b[43m',
			'{blue-bg}': '\u001b[44m',
			'{magenta-bg}': '\u001b[45m',
			'{cyan-bg}': '\u001b[46m',
			'{white-bg}': '\u001b[47m',
			'{gray}|{grey}|{bright-black}': '\u001b[90m',
			'{bright-red}': '\u001b[91m',
			'{bright-green}': '\u001b[92m',
			'{bright-yellow}': '\u001b[93m',
			'{bright-blue}': '\u001b[94m',
			'{bright-magenta}': '\u001b[95m',
			'{bright-cyan}': '\u001b[96m',
		}

		for(let key in _colors) {
			text = text.replace(new RegExp(key, 'g'), _colors[key])
		}
	   	return `${text}${_colors['{reset}']}`
	}
}

module.exports = AnsiKit;
