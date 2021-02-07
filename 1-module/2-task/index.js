/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
//здесь я не поняла, как связать между собой 2 функции isValid и sayHello
// и как проверить работу этих функций вместе.
function isValid(name) {
  let name = name !== " " && name.length >= 4 && name !== "" ? true : false;
}
isValid(name);

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
