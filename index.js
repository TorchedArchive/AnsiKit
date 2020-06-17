/*
    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "black", "white"]
const bgColors = ["red-bg", "green-bg", "yellow-bg", "blue-bg", "magenta-bg", "cyan-bg", "white-bg"]

function ansiplace(str) {
	const _colors = {
		"{reset}": "\u001b[0m",
		"{bold}": "\u001b[1m",
		"{dim}|{faint}": "\u001b[2m",
		"{italic}": "\u001b[3m",
		"{underline}": "\u001b[4m",
		"{invert}|{reverse}": "\u001b[7m",
		"{strike}|{strikethrough}": "\u001b[9m",
		"{black}": "\u001b[30m",
		"{red}": "\u001b[31m",
		"{green}": "\u001b[32m",
		"{yellow}": "\u001b[33m",
		"{blue}": "\u001b[34m",
		"{magenta}": "\u001b[35m",
		"{cyan}": "\u001b[36m",
		"{white}": "\u001b[37m",
		"{red-bg}": "\u001b[41m",
		"{green-bg}": "\u001b[42m",
		"{yellow-bg}": "\u001b[43m",
		"{blue-bg}": "\u001b[44m",
		"{magenta-bg}": "\u001b[45m",
		"{cyan-bg}": "\u001b[46m",
		"{white-bg}": "\u001b[47m",
	}

	for(let key in _colors) {
		str = str.replace(new RegExp(key, "g"), _colors[key])
	}
   	return `${str}${_colors["{reset}"]}`
}

module.exports = ansiplace;
module.exports.extras = {
	colors,
	styles: ["reset", "bold", "dim", "italic", "underline", "invert", "strikethrough", ...colors, ...bgColors]
}