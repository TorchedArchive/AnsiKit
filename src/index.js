const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'grey', 'bright-red', 'bright-green', 'bright-yellow', 'bright-blue', 'bright-magenta', 'bright-cyan', 'black', 'white']
const bgColors = ['red-bg', 'green-bg', 'yellow-bg', 'blue-bg', 'magenta-bg', 'cyan-bg', 'white-bg']

class AnsiKit {
	/**
	 * Triggers a full reset of the terminal to its original state (mostly).
	 * This may include: reset colors, clear screen, reset to default font, and more.
	 * @return {AnsiKit}
	 */
	static reset() {
		process.stdout.write(AnsiKit._escape('c'));
		return AnsiKit;
	}

	static get extras() {
		return {
			colors,
			styles: ['reset', 'bold', 'dim', 'italic', 'underline', 'invert', 'strikethrough', ...colors, ...bgColors]
		}
	}

	/**
	 * Formats the text, replacing instances of '{tag}' (for example '{red}') with the equivalent color code.
	 * All available tags are listed at AnsiKit#extras
	 * @param  {string} text The text to format.
	 * @return {string}
	 */
	static format(text) {
		const _colors = {
			'{reset}': AnsiKit._escape('[0m'),
			'{bold}': AnsiKit._escape('[1m'),
			'{dim}|{faint}': AnsiKit._escape('[2m'),
			'{italic}': AnsiKit._escape('[3m'),
			'{underline}': AnsiKit._escape('[4m'),
			'{invert}|{reverse}': AnsiKit._escape('[7m'),
			'{strike}|{strikethrough}': AnsiKit._escape('[9m'),
			'{black}': AnsiKit._escape('[30m'),
			'{red}': AnsiKit._escape('[31m'),
			'{green}': AnsiKit._escape('[32m'),
			'{yellow}': AnsiKit._escape('[33m'),
			'{blue}': AnsiKit._escape('[34m'),
			'{magenta}': AnsiKit._escape('[35m'),
			'{cyan}': AnsiKit._escape('[36m'),
			'{white}': AnsiKit._escape('[37m'),
			'{red-bg}': AnsiKit._escape('[41m'),
			'{green-bg}': AnsiKit._escape('[42m'),
			'{yellow-bg}': AnsiKit._escape('[43m'),
			'{blue-bg}': AnsiKit._escape('[44m'),
			'{magenta-bg}': AnsiKit._escape('[45m'),
			'{cyan-bg}': AnsiKit._escape('[46m'),
			'{white-bg}': AnsiKit._escape('[47m'),
			'{gray}|{grey}|{bright-black}': AnsiKit._escape('[90m'),
			'{bright-red}': AnsiKit._escape('[91m'),
			'{bright-green}': AnsiKit._escape('[92m'),
			'{bright-yellow}': AnsiKit._escape('[93m'),
			'{bright-blue}': AnsiKit._escape('[94m'),
			'{bright-magenta}': AnsiKit._escape('[95m'),
			'{bright-cyan}': AnsiKit._escape('[96m'),
		}

		for(let key in _colors) {
			text = text.replace(new RegExp(key, 'g'), _colors[key])
		}
	   	return `${text}${_colors['{reset}']}`
	}

	/**
	 * Saves the current state of the terminal (cursor position, certain attributes, etc).
	 * @return {AnsiKit}
	 */
	static saveState() {
		process.stdout.write(AnsiKit._escape('7'));
		return AnsiKit;
	}

	/**
	 * Restores the most recently saved state.
	 * @return {AnsiKit}
	 */
	static restoreState() {
		process.stdout.write(AnsiKit._escape('8'));
		return AnsiKit;
	}

	/**
	 * Fills the screen with E's
	 * @return {AnsiKit}
	 */
	static eScreen() {
		process.stdout.write(AnsiKit._escape('#8'));
		return AnsiKit;
	}

	/**
	 * Moves the cursor up 'x' amount of lines.
	 * If x is -1, then it will move the cursor up the amount of lines in the terminal.
	 * Default: 1
	 * @param  {number} x How much lines to move up
	 * @return {AnsiKit}
	 */
	static cursorUp(x) {
		if (x === -1) x = process.stdout.rows;
		if (!x) x = 1;
		if (typeof x !== 'number') x = 0;

		process.stdout.write(AnsiKit._escape(`[${x}A`));
		return AnsiKit;
	}

	/**
	 * Moves the cursor down 'x' amount of lines.
	 * If x is -1, then it will move the cursor down the amount of lines in the terminal.
	 * Default: 1
	 * @param  {number} x How much lines to move down
	 * @return {AnsiKit}
	 */
	static cursorDown(x) {
		if (x === -1) x = process.stdout.rows;
		if (!x) x = 1;
		if (typeof x !== 'number') x = 0;

		process.stdout.write(AnsiKit._escape(`[${x}B`))
		return AnsiKit;
	}

	/**
	 * Formats text, then prints it.
	 * @param  {string} str The text to format
	 * @return {AnsiKit}
	 */
	static print(text) {
		process.stdout.write(AnsiKit.format(text));
		return AnsiKit;
	}

	/**
	 * Formats text, then prints it and adds a newline.
	 * @param  {string} str The text to format
	 * @return {AnsiKit}
	 */
	static println(str) {
		process.stdout.write(`${AnsiKit.format(str)}\n`);
		return AnsiKit;
	}

	/**
	 * Sets the terminal window's title. 
	 * @param {string} text The text to use as the window title
	 * @returns {AnsiKit}
	 */
	static setTitle(text = ' ') {
		process.stdout.write(`${AnsiKit._escape(`]2;`)}${text}${AnsiKit._escape(`\\`)}`);
		return AnsiKit;
	}

	static _escape(str) {
		return `\u001b${str}`
	}
}

module.exports = AnsiKit;
