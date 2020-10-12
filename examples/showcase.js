const ansikit = require("../lib")

for (const key of ansikit.extras.styles) {
	let name = key;

	if (key === "reset") continue;
	if (/^[a-z]*-bg/.test(key)) name = ansikit.format(`{black}${name}`);

	ansikit.print(`   {${key}}${name}{reset}`);
}
