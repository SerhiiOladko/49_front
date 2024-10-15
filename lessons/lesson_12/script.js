// ! Functions - функции

// функции позволяют переиспользовать написанный код
// если нужно, то можно создать функцию, которую можно будет переиспользовать с разными данными
// функции помогают организовывать и структурировать код

// важная часть функции - return (возвращаемое значение)
// в нем мы указываем на то, что функция 'произведет' или вернет (поэтому, return)
// такое возвращенное значение можно забрать из функции и использовать дальше в программе
// если у функции нет возвращенного значения - она возвращает undefined

// * 1. function declaration - объявление через ключевое слово function

// объявление функции через ключевое слово function
// value - это параметр за место которого в функцию при вызове придет значение

// пример с hoisting (поднятие), вызовом функции до ее объявления
const greeting3 = helloWord(42);

function helloWord(value) {
  // даем возможность передать значение как строку или как число через проверку с typeof
  if (typeof value === "string" || typeof value === "number") {
    return `Hello, ${value}!`;
  }
  // 'выбрасываем' ошибку, чтобы не дать использовать функцию с данными неверного типа
  throw new Error("give me string value, please");
}

// чтобы пользоваться возвращенным значением в коде мы кладем его в переменную
// передаваемые вместо параметров в функцию значения называются аргументами

const greeting1 = helloWord("JavaScript");
const greeting2 = helloWord("sun");

// console.log(greeting1);
// console.log(greeting2);
// console.log(greeting3);

// * 2. function expression - объявление в переменной + ключевое слово function
// такие функции кладутся в переменную и обладают ее свойствами
// их нельзя вызвать до инициализации переменной

// const sumResult = sum(50, 30); вызов до инициализации приведет к ошибке

const sum = function (num1, num2) {
  return num1 + num2;
};

const sumResult = sum(50, 30);
// console.log("суммы двух чисел ====>", sumResult);

// * 3. Стрелочные функции - arrow functions
/// называются так из-за символа =>

// если выражение можно уместить в одну строку  - стрелочным функциям не нужен return
// результат действие станет возвращенным значением
const multiply = (a, b, c) => a * b * c;

// если действе в теле функции не уместить в одну строку мы добавляем фигурные скобки
// если не указать return такая функция вернет undefined

const multiply1 = (a, b, c) => {
  const result = a * b * c;
  return `${result} - это результат умножения ${a}, ${b} и ${c}`;
};

const multiply2 = (a, b, c) => {
  a * b * c;
};

// console.log(multiply1(10, 2, 3)); // вернет 60 - результат выражения
// console.log(multiply1(10, 2, 3)); // вернет строку `${result} - это результат умножения ${a}, ${b} и ${c}`;
// console.log(multiply2(10, 2, 3)) // вернет undefined , поскольку нет return

// ! методы массивов

const brothers = [
  { name: "Legolas", height: 190, race: "elf", age: 500, hasMagic: true },
  { name: "Ghimli", height: 50, race: "dwarf", age: 200, hasMagic: false },
  { name: "Aragorn", height: 190, race: "human", age: 50, hasMagic: false },
  { name: "Gendalf", height: 200, race: "magician", age: 2000, hasMagic: true }
];

let frodo = { name: "Frodo", height: 105, race: "hobbit", age: 33, hasMagic: false };

brothers.push(frodo);

// console.log("новая длинна массива", brothers.push(frodo)); // выводим новую длину массива

// console.log(brothers);

// * map()
// не мутирующий - не изменит исходный массив
// метод возвращает новый массив с кол-вом элементов исходного (даже если это будет массив с undefined)
// нужен для создания нового массива на основании исходного
// метод итерируется по элементам исходного массива

// 1. создаем массив строк с именами героев
// заместо параметра el в стрелочной функции на каждой итерации будет поочередно приходить следующий элемент массива
// итераций будет столько, сколько в массиве элементов
// после => указываем, каким будет элемент в новом массиве (например в нашем случае мы оставили только значение по имени)
// el - это имя параметра, который мы придумываем сами. на каждой итерации на его месте мы представляем элемент массива
const brothersNames = brothers.map(el => el.name);

// console.log(brothersNames);

// 2. создаем новый массив с возрастом братьев

const brothersAges = brothers.map(brother => brother.age);
// console.log(brothersAges);

// 3. создаем массив из строк с именами и возрастом

// const brothersNamesAndAges = brothers.map(element => {
//   element.name + " " + element.age;
// });
// console.log(brothersNamesAndAges);
// в этом примере придет undefined - потому что при наличии фигурных скобок мы не указали return

// не забываем указывать return при наличии фигурных скобок для сложных многострочных действий
const brothersNamesAndAges = brothers.map(element => {
  return element.name + " " + element.age;
});

// console.log(brothersNamesAndAges);

// * filter()
// не мутирующий
// возвращает новый массив элементов удовлетворяющих условию
// если такой элемент всего один - вам придет один элемент в массиве
// если таких элементов нет - придет пустой массив
// метод гарантированно вернет массив

// console.log(brothers.filter(brother => brother.age > 100 && brother.hasMagic === true));

// * find()
// не мутирующий
// возвращает первый элемент удовлетворяющий условию

const hobbit = brothers.find(brother => brother.race === "hobbit"); // вернется frodo
const oldHero = brothers.find(brother => brother.age > 100); // вернется только legolas

// console.log(hobbit);
// console.log(oldHero);

// * reduce()
// не мутирующий метод
// считаем сумму возраста всех братьев

// реализация без reduce() через цикл
let sum1 = 0;

for (let i = 0; i < brothersAges.length; i++) {
  sum1 += brothersAges[i];
}

console.log("сумма возрастов из цикла", sum1);

// с использованием reduce()
// метод принимает в себя два аргумента:
// 1. стрелочную функцию для описания операции в которой первый аргумент - аккумулируемое значение, второй - текущие элемент массива
// 2. начальное значения для переменной-аккумулятора

let sum2 = brothersAges.reduce((acc, current) => acc + current, 1000);

// пример с массивом из объектов
let sum3 = brothers.reduce((acc, current) => acc + current.age, 0);

console.log("сумма возрастов из reduce на 1000 лет больше", sum2);
console.log("сумма возрастов из reduce (из объекта)", sum3);

let brothersNamesInString = brothers.reduce(
  (acc, current) => acc + current.name + ", ",
  "Братство кольца: "
);

// * удаляем два последних символа в строке через slice() - метод строк
// slice не мутирующий метод возвращает новый элемент
// console.log(brothersNamesInString.slice(0, -2));

// split - разделяет строку на элементы в массиве по разделителю
// join - склеивает элементы массива по строке-объединителю

// сделали строку в которой слова идут задом наперед
const newBrothers = brothersNamesInString.split(" ").reverse().join(" ");

// мы переместили символы в троке задом наперед
const newBrothers1 = brothersNamesInString.split("").reverse().join("");

console.log(newBrothers);
console.log(newBrothers1);
