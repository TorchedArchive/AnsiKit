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

function ansiplace(str) {
	const colors = {
		"{reset}": "\u001b[0m",
		"{bold}": "\u001b[1m",
		"{italic}": "\u001b[3m",
		"{underline}": "\u001b[4m",
		"{strike}|{strikethrough}": "\u001b[9m",
		"{black}": "\u001b[30m",
		"{red}": "\u001b[31m",
		"{green}": "\u001b[32m",
		"{yellow}": "\u001b[33m",
		"{blue}": "\u001b[34m",
		"{magenta}": "\u001b[35m",
		"{cyan}": "\u001b[36m",
		"{white}": "\u001b[37m"
	}

	for(let key in colors) {
		str = str.replace(new RegExp(key, "g"), colors[key])
	}
   	return str + colors["{reset}"]
}

module.exports = ansiplace;
module.exports.colors = ["red", "green", "yellow", "blue", "magenta", "cyan"]