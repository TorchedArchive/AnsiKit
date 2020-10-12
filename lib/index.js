/* eslint-env node, es2017 */
/**
 * 🎨 The ultimate terminal ANSI kit.
 * @module AnsiKit
 */

const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'grey', 'bright-red', 'bright-green', 'bright-yellow', 'bright-blue', 'bright-magenta', 'bright-cyan', 'black', 'white'];
const bgColors = ['red-bg', 'green-bg', 'yellow-bg', 'blue-bg', 'magenta-bg', 'cyan-bg', 'white-bg'];

/**
 * 🎨 The ultimate terminal ANSI kit.
 * @hideconstructor
 */
class AnsiKit {
	/**
	 * Clears the terminal.
	 * @param  {boolean} [scrollback=false] Whether to include what can be scrolled back to.
	 * @return {AnsiKit}
	 */
	static clear(scrollback) {
		const type = scrollback ? 3 : 2;
		return AnsiKit.printCSI(type, 'J');
	}

	/**
	 * Clears from the cursor's position to the end of the screen.
	 * @return {AnsiKit}
	 */
	static clearFromPos() {
		return AnsiKit.printCSI(0, 'J');
	}

	/**
	 * Clears from the beginning of the screen to the cursor's position.
	 * @return {AnsiKit}
	 */
	static clearToPos() {
		return AnsiKit.printCSI(1, 'J');
	}

	/**
	 * Sets text color to an 8bit color (256 available colors).
	 * If <code>num</code> is not provided, is not a number or is more than 255/less than 0, it will default to 0
	 * @param  {Number} num Color of the text
	 * @return {AnsiKit}
	 */
	static color256(num = 0) {
		if (num >= 256 || num <= -1 || typeof num !== 'number') num = 0;

		return AnsiKit.printCSI(`38;5;${num}`);
	}

	/**
	 * Moves the cursor down <code>x</code> amount of lines.
	 * If <code>x</code> is -1, then it will move the cursor down the amount of lines in the terminal.
	 * @param   {number} x How much lines to move down
	 * @return  {AnsiKit}
	 */
	static cursorDown(x = 1) {
		if (x === -1) x = process.stdout.rows;
		if (typeof x !== 'number') x = 1;

		return AnsiKit.printCSI(x, 'B');
	}

	/**
	 * Moves the cursor left <code>x</code> amount of lines.
	 * If <code>x</code> is -1, then it will move the cursor left the amount of columns in the terminal.
	 * @param   {number} x How much columns to move left
	 * @return  {AnsiKit}
	 */
	static cursorLeft(x = 1) {
		if (x === -1) x = process.stdout.columns;
		if (typeof x !== 'number') x = 1;

		return AnsiKit.printCSI(x, 'D');
	}

	/**
	 * Gets the cursor's position
	 * @return {Promise<number[]>} <code>[x pos, y pos]</code> (or <code>[-1, -1]</code> if the function failed)
	 */
	static cursorPos() {
		return new Promise((res) => {
			process.stdin.resume();
			process.stdin.setRawMode(true);

			process.stdin.once('data', (b) => {
				const match = /\[(\d+)\;(\d+)R$/.exec(b.toString());
				if (match) {
					const position = match.slice(1, 3).reverse().map(Number);
					res([position[0], position[1]]);
				} else {
					res([-1, -1]);
				}
				process.stdin.setRawMode(false);
				process.stdin.pause();
			});
			AnsiKit.printCSI(6, 'n');
		});
	}

	/**
	 * Moves the cursor right <code>x</code> amount of lines.
	 * If <code>x</code> is -1, then it will move the cursor right the amount of columns in the terminal.
	 * @param   {number} x How much columns to move right
	 * @return  {AnsiKit}
	 */
	static cursorRight(x = 1) {
		if (x === -1) x = process.stdout.columns;
		if (typeof x !== 'number') x = 1;

		return AnsiKit.printCSI(x, 'C');
	}

	/**
	 * Moves the cursor to absolute position <code>x, y</code>.
	 * @param   {number} x X pos
	 * @param   {number} y Y pos
	 * @return  {AnsiKit}
	 */
	static cursorTo(x = 1, y = 1) {
		if (typeof x !== 'number') x = 1;
		if (typeof y !== 'number') y = 1;

		return AnsiKit.printCSI(`${x};${y}`, 'H');
	}

	/**
	 * Moves the cursor up <code>x</code> amount of lines.
	 * If <code>x</code> is -1, then it will move the cursor up the amount of lines in the terminal.
	 * @param   {number} x How much lines to move up
	 * @return  {AnsiKit}
	 */
	static cursorUp(x = 1) {
		if (x === -1) x = process.stdout.rows;
		if (typeof x !== 'number') x = 1;

		return AnsiKit.printCSI(x, 'A');
	}

	/**
	 * Fills the screen with E's
	 * @return {AnsiKit}
	 */
	static eScreen() {
		return AnsiKit.printCode('#8')
	}

	static get extras() {
		return {
			colors,
			styles: ['reset', 'bold', 'dim', 'italic', 'underline', 'invert', 'strikethrough', ...colors, ...bgColors]
		};
	}

	/**
	 * Formats the text, replacing instances of <code>{tag}</code> (for example <code>{red}</code>) with the equivalent color code.
	 * All available tags are listed at {@link https://github.com/Luvella/AnsiKit#styles styles.}
	 * @param  {string} text The text to format.
	 * @return {string}
	 */
	static format(text) {
		const _colors = {
			'{reset}': '\x1b[0m',
			'{bold}': '\x1b[1m',
			'{dim}|{faint}': '\x1b[2m',
			'{italic}': '\x1b[3m',
			'{underline}': '\x1b[4m',
			'{invert}|{reverse}': '\x1b[7m',
			'{strike}|{strikethrough}': '\x1b[7m',
			'{bold-off}': '\x1b[22m',
			'{underline-off}': '\x1b[24m',
			'{black}': '\x1b[30m',
			'{red}': '\x1b[31m',
			'{green}': '\x1b[32m',
			'{yellow}': '\x1b[33m',
			'{blue}': '\x1b[34m',
			'{magenta}': '\x1b[35m',
			'{cyan}': '\x1b[36m',
			'{white}': '\x1b[37m',
			'{red-bg}': '\x1b[41m',
			'{green-bg}': '\x1b[42m',
			'{yellow-bg}': '\x1b[43m',
			'{blue-bg}': '\x1b[44m',
			'{magenta-bg}': '\x1b[45m',
			'{cyan-bg}': '\x1b[46m',
			'{white-bg}': '\x1b[49m',
			'{gray}|{grey}|{bright-black}': '\x1b[90m',
			'{bright-red}': '\x1b[91m',
			'{bright-green}': '\x1b[92m',
			'{bright-yellow}': '\x1b[93m',
			'{bright-blue}': '\x1b[94m',
			'{bright-magenta}': '\x1b[95m',
			'{bright-cyan}': '\x1b[96m'
		};

		for (const key in _colors) text = text.replace(new RegExp(key, 'g'), _colors[key]);
		return `${text}${_colors['{reset}']}`;
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
	 * Prints an ANSI escape code
	 * @param  {string | number} code      Code to print
	 * @param  {boolean}         terminate Whether to end with the string terminator (<code>ESC \</code>)
	 * @return {AnsiKit}
	 */
	static printCode(code, terminate = false) {
		process.stdout.write(`\x1b${code}${terminate ? '\x1b\\' : ''}`);
		return AnsiKit;
	}

	/**
	 * Prints a CSI code
	 * @param  {string | number} code      Code to print
	 * @param  {boolean}         end       Character to end the CSI code, which determines what it does.
	 * @return {AnsiKit}
	 */
	static printCSI(code, end = 'm') {
		process.stdout.write(`\x1b[${code}${end}`);
		return AnsiKit;
	}

	/**
	 * Formats text, then prints it and adds a newline.
	 * @param  {string} str The text to format
	 * @return {AnsiKit}
	 */
	static println(str) {
		return AnsiKit.format(`${str}\n`);
	}

	/**
	 * Triggers a full reset of the terminal to its original state (mostly).
	 * This may include: reset colors, clear screen, reset to default font, and more.
	 * @return {AnsiKit}
	 */
	static reset() {
		return AnsiKit.printCode('c');
	}

	/**
	 * Restores the most recently saved state.
	 * @return {AnsiKit}
	 */
	static restoreState() {
		return AnsiKit.printCode(8);
	}

	/**
	 * Sets text color to an RGB value.
	 * If a value is not provided, is not a number or is more than 255/less than 0 it will default to 0
	 * @param  {Number} r Red intensity
	 * @param  {Number} g Green intensity 
	 * @param  {Number} b Blue intensity 
	 * @return {AnsiKit}
	 */
	static rgb(r = 0, g = 0, b = 0) {
		if (r >= 256 || r <= -1 || typeof r !== 'number') r = 0;
		if (g >= 256 || g <= -1 || typeof g !== 'number') g = 0;
		if (b >= 256 || b <= -1 || typeof b !== 'number') b = 0;

		return AnsiKit.printCSI(`38;2;${r};${g};${b}`);
	}

	/**
	 * Saves the current state of the terminal (cursor position, certain attributes, etc).
	 * @return {AnsiKit}
	 */
	static saveState() {
		return AnsiKit.printCode(7);
	}

	/**
	 * Sets the terminal window's title. 
	 * @param   {string} text The text to use as the window title
	 * @returns {AnsiKit}
	 */
	static setTitle(text = ' ') {
		return AnsiKit.printCode(`]2;${text}`, true);
	}
}

module.exports = AnsiKit;
