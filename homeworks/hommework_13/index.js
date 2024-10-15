//1.Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
//['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
function arrayToObject(arr) {
    return arr.reduce((obj, item) => {
      obj[item] = item;
      return obj;
    }, {});
  }
  
  const result1 = arrayToObject(['a', 36.6, 'John Doe']);
  console.log(result1);

 // 2. Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
//[
  //[ 'height', 170 ],
  //[ 'weight', 80 ],
  //[ 'sport', 'regbi' ],
  //[ 'full name', 'John Doe' ],
  //[ 'sing', 'love' ],
  //[ 'speed', 90 ]
//]
function mainPairsToString(main) {
    return main.map(pair => pair.join(': ')).join(', ');
  }
  
  const result2 = mainPairsToString([
    ['height', 170],
    ['weight', 80],
    ['sport', 'rugby'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
  ]);
  
  console.log(result2);