/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

let maxlength = '...';
let str = 'abcde12abcde12abcde12abcde12abcde12abcde12';

function truncate(str, maxlength) {
  if (str.length > 20){
retern (str.slice(0, -1) + maxlength);
} else {
retern (str);
}
}


