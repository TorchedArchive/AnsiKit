declare module "ansikit" {
	interface AnsiKitExtras {
		colors: string[];
		styles: string[];
	}

	class AnsiKit {

		static get extras(): AnsiKitExtras;

		/**
		 * Clears the terminal.
		 * @param  {boolean} [scrollback=false] Whether to include what can be scrolled back to.
		 * @return {AnsiKit}
		 */
		static clear(scrollback?: boolean): typeof AnsiKit;

		/**
		 * Clears from the cursor's position to the end of the screen.
		 * @return {AnsiKit}
		 */
		static clearFromPos(): typeof AnsiKit;

		/**
		 * Clears from the beginning of the screen to the cursor's position.
		 * @return {AnsiKit}
		 */
		static clearToPos(): typeof AnsiKit;

		/**
		 * Sets text color to an 8bit color (256 available colors).
		 * If <code>num</code> is not provided, is not a number or is more than 255/less than 0, it will default to 0
		 * @param  {Number} num Color of the text
		 * @return {AnsiKit}
		 */
		static color256(num?: number): typeof AnsiKit;

		/**
		 * Moves the cursor down <code>x</code> amount of lines.
		 * If <code>x</code> is -1, then it will move the cursor down the amount of lines in the terminal.
		 * @param   {number} x How much lines to move down
		 * @return  {AnsiKit}
		 */
		static cursorDown(x?: number): typeof AnsiKit;

		/**
		 * Moves the cursor left <code>x</code> amount of lines.
		 * If <code>x</code> is -1, then it will move the cursor left the amount of columns in the terminal.
		 * @param   {number} x How much columns to move left
		 * @return  {AnsiKit}
		 */
		static cursorLeft(x?: number): typeof AnsiKit;

		/**
		 * Gets the cursor's position
		 * @return {Promise<number[]>} <code>[x pos, y pos]</code> (or <code>[-1, -1]</code> if the function failed)
		 */
		static cursorPos(): Promise<number[]>;

		/**
		 * Moves the cursor right <code>x</code> amount of lines.
		 * If <code>x</code> is -1, then it will move the cursor right the amount of columns in the terminal.
		 * @param   {number} x How much columns to move right
		 * @return  {AnsiKit}
		 */
		static cursorRight(x: number)

		/**
		 * Moves the cursor to absolute position <code>x, y</code>.
		 * @param   {number} x X pos
		 * @param   {number} y Y pos
		 * @return  {AnsiKit}
		 */
		static cursorTo(x?: number, y?: number): typeof AnsiKit;

		/**
		 * Moves the cursor up <code>x</code> amount of lines.
		 * If <code>x</code> is -1, then it will move the cursor up the amount of lines in the terminal.
		 * @param   {number} x How much lines to move up
		 * @return  {AnsiKit}
		 */
		static cursorUp(x?: number): typeof AnsiKit;

		/**
		 * Fills the screen with E's
		 * @return {AnsiKit}
		 */
		static eScreen(): typeof AnsiKit;

		/**
		 * Formats the text, replacing instances of <code>{tag}</code> (for example <code>{red}</code>) with the equivalent color code.
		 * All available tags are listed at {@link https://github.com/Luvella/AnsiKit#styles styles.}
		 * @param  {string} text The text to format.
		 * @return {string}
		 */
		static format(text: string): string;

		/**
		 * Formats text, then prints it.
		 * @param  {string} text The text to format
		 * @return {AnsiKit}
		 */
		static print(text: string): typeof AnsiKit;

		/**
		 * Prints an ANSI escape code
		 * @param  {string | number} code      Code to print
		 * @param  {boolean}         terminate Whether to end with the string terminator (<code>ESC \</code>)
		 * @return {AnsiKit}
		 */
		static printCode(code: string | number, terminate?: boolean): typeof AnsiKit;

		/**
		 * Prints a CSI code
		 * @param  {string | number} code      Code to print
		 * @param  {boolean}         end       Character to end the CSI code, which determines what it does.
		 * @return {AnsiKit}
		 */
		static printCSI(code: string | number, end?: string): typeof AnsiKit;

		/**
		 * Formats text, then prints it and adds a newline.
		 * @param  {string} str The text to format
		 * @return {AnsiKit}
		 */
		static println(str: string): typeof AnsiKit;

		/**
		 * Triggers a full reset of the terminal to its original state (mostly).
		 * This may include: reset colors, clear screen, reset to default font, and more.
		 * @return {AnsiKit}
		 */
		static reset(): typeof AnsiKit;

		/**
		 * Restores the most recently saved state.
		 * @return {AnsiKit}
		 */
		static restoreState(): typeof AnsiKit;

		/**
		 * Sets text color to an RGB value.
		 * If a value is not provided, is not a number or is more than 255/less than 0 it will default to 0
		 * @param  {Number} r Red intensity
		 * @param  {Number} g Green intensity
		 * @param  {Number} b Blue intensity
		 * @return {AnsiKit}
		 */
		static rgb(r?: number, g?: number, b?: number): typeof AnsiKit;

		/**
		 * Saves the current state of the terminal (cursor position, certain attributes, etc).
		 * @return {AnsiKit}
		 */
		static saveState(): typeof AnsiKit;

		/**
		 * Sets the terminal window's title.
		 * @param   {string} text The text to use as the window title
		 * @returns {AnsiKit}
		 */
		static setTitle(text?: string): typeof AnsiKit;
	}

	export = AnsiKit;
}
