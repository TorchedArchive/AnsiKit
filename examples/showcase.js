const ansiplace = require("../index")

for (const key of ansiplace.extras.styles) {
	let name = key;

	if (key === "reset") {
		continue
	}

	if (/^[a-z]*-bg/.test(key)) {
		name = ansiplace(`{black}${name}`);
	}
	process.stdout.write(ansiplace(`   {${key}}${name}{reset}`));
}