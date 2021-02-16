/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

let maxlength = '...';
let str = 'abcde12abcde12abcde12abcde12abcde12abcd';

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


