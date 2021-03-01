
//let str = "тест";

//alert( str.split('') );

function camelize(str) {
  return str.split('-')
  .map ((elem, index) => index == 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
  .join('');
};
