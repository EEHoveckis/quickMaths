const { evaluate } = require("mathjs");

module.exports = function(i) {
	let numbers = numb();
	switch (i) {
		case 0:
			return `${numbers.a} + ${numbers.b}`;
			break;
		case 1:
			return `${numbers.a} - ${numbers.b}`;
			break;
		case 2:
			return `${numbers.a} * ${numbers.b}`;
			break;
		case 3:
			let badQuestion = true;
			do {
				let a = divNumbers().a;
				let b = divNumbers().b;
				if (a % b == 0) {
					badQuestion = false;
					return `${a} / ${b}`;
				}
			} while (badQuestion);
			break;
		case 4:
			return `${numbers.a} + ${numbers.b} + ${numbers.a}`;
			break;
		case 5:
			return `${numbers.a} + ${numbers.b} - ${numbers.a}`;
			break;
		case 6:
			return `${numbers.a} - ${numbers.b} + ${numbers.a}`;
			break;
		case 7:
			return `${numbers.a} - ${numbers.b} - ${numbers.b}`;
			break;
		case 8:
			return `${numbers.a} * ${numbers.b} / ${numbers.a}`;
			break;
		case 9:
			return `${numbers.a} * ${numbers.b} + ${numbers.a}`;
			break;
		case 10:
			return `${numbers.a} * ${numbers.b} - ${numbers.a}`;
			break;
		case 11:
			return `${numbers.a} * ${numbers.b} + ${numbers.b}`;
			break;
		case 12:
			return `${numbers.a} * ${numbers.b} - ${numbers.b}`;
			break;
		case 13:
			return `${numbers.a} * 0 + ${numbers.b}`;
			break;
		case 14:
			return `${numbers.a} * ${numbers.b} * 0`;
			break;
		case 15:
			return `${numbers.a} + ${numbers.b} * ${numbers.b}`;
			break;
		case 16:
			return `${numbers.a} * ${numbers.b} / ${numbers.a}`;
			break;
		case 17:
			return `${numbers.a} - ${numbers.b} * ${numbers.a}`;
			break;
		case 18:
			return `${numbers.a} * ${numbers.a}`;
			break;
		case 19:
			return `${numbers.b} * ${numbers.b}`;
			break;
	}

	function numb() {
		let a = Math.floor(Math.random() * 20);
		let b = Math.floor(Math.random() * 20);
		return { a, b };
	}

	function divNumbers() {
		let a = Math.floor(Math.random() * 100);
		let b = Math.floor(Math.random() * 100);
		return { a, b };
	}
}
