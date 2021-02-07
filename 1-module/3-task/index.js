/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
let name = 'вася';

function ucFirst (name) {
	name = name[0].toUpperCase() + name.substring(1);
}

ucFirst (name);

