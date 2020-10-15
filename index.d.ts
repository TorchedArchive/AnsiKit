declare module "ansikit" {
	interface AnsiKitExtras {
		colors: string[];
		styles: string[];
	}

	class AnsiKit {
		static get extras(): AnsiKitExtras;

		static clear(scrollback?: boolean): typeof AnsiKit;
		static clearFromPos(): typeof AnsiKit;
		static clearLine(): typeof AnsiKit;
		static clearToPos(): typeof AnsiKit;

		static color256(num?: number): typeof AnsiKit;

		static cursorDown(x?: number): typeof AnsiKit;
		static cursorLeft(x?: number): typeof AnsiKit;
		static cursorPos(): Promise<number[]>;
		static cursorRight(x: number): typeof AnsiKit;
		static cursorTo(x?: number, y?: number): typeof AnsiKit;
		static cursorUp(x?: number): typeof AnsiKit;

		static eScreen(): typeof AnsiKit;

		static format(text: string): string;

		static print(text: string): typeof AnsiKit;
		static printCode(code: string | number, terminate?: boolean): typeof AnsiKit;
		static printCSI(code?: string | number, end?: string): typeof AnsiKit;
		static println(str: string): typeof AnsiKit;

		static reset(): typeof AnsiKit;

		static restoreCursor(): typeof AnsiKit;
		static restoreState(): typeof AnsiKit;

		static rgb(r?: number, g?: number, b?: number): typeof AnsiKit;

		static saveCursor(): typeof AnsiKit;
		static saveState(): typeof AnsiKit;

		static setTitle(text?: string): typeof AnsiKit;
		
		static showCursor(): typeof AnsiKit;
	}

	export = AnsiKit;
}
